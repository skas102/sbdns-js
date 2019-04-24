// transforms a given string to its canonical representation
function canonical(name){
    var canonicalName = name
    if (name.substring(name.length - 1) !== '.') {
        canonicalName = name + '.'
    }
    return canonicalName
}

// verify that environment variables exist
function verifyEnvironmentVariables(){
    if (process.env.POWERDNS_HOST === undefined || process.env.POWERDNS_HOST === null) {
        console.error('Host is not set!')
        process.exit(1)
    }

    if (process.env.POWERDNS_PORT === undefined || process.env.POWERDNS_PORT === null) {
        console.error('Port is not set!')
        process.exit(1)
    }

    if (process.env.POWERDNS_API_KEY === undefined || process.env.POWERDNS_API_KEY === null) {
        console.log('API Key is not set!')
        process.exit(1)
    }
}

// print error
function printError(e, msg) {
    console.log('=' * 20)
    var line = 'ERROR: '
    if (msg) {
        line += msg
        line += ` ${msg}`
    } else {
        line += e.toString()
    }
    console.log(line)
}

module.exports = {
    canonical, 
    verifyEnvironmentVariables,
    printError
}