var express = require('express')
var shell = require('shelljs')

var router = express.Router()

/* GET org listing. */
router.get('/', function (req, res, next) {
  // Supress output of user password, since it displays redundant information
  const silentState = shell.config.silent
  shell.config.silent = true

  const output = shell.exec('sfdx force:org:list --clean --noprompt --json').stdout
  shell.config.silent = silentState // restore old silent state
  const parsed = JSON.parse(output)
  const scratchOrgs = parsed.result.scratchOrgs

  res.json(scratchOrgs)
})

module.exports = router
