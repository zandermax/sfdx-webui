var express = require('express')
const sfdx = require('sfdx')
var shell = require('shelljs')

var router = express.Router()

/* GET org listing. */
router.get('/', function (req, res, next) {
  // Supress output of user password, since it displays redundant information
  const silentState = shell.config.silent
  shell.config.silent = true

  sfdx.list({ json: true, quiet: true }).then(result => {
    console.log('result', result)
    shell.config.silent = silentState // restore old silent state
    const parsed = JSON.parse(result)
    const scratchOrgs = parsed.result.scratchOrgs

    res.json(scratchOrgs)
  })
})

module.exports = router
