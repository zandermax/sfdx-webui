var express = require('express')
const sfdx = require('sfdx')
var shell = require('shelljs')

var router = express.Router()

/* GET org listing. */
router.get('/', async function (req, res, next) {
  // Supress output of user password, since it displays redundant information
  const silentState = shell.config.silent
  shell.config.silent = true

  const orgList = await sfdx.list({ json: true })

  shell.config.silent = silentState // restore old silent state
  const parsed = JSON.parse(orgList)
  const scratchOrgs = parsed.result.scratchOrgs

  // Take each scratch org, associate status
  for (let org of scratchOrgs) {
    const result = await sfdx.status({ quiet: true, alias: org.username })
    const isUpToDate = result.indexOf('No results found') !== -1
    org.isUpToDate = isUpToDate.toString()
  }

  res.json(scratchOrgs)
})

module.exports = router
