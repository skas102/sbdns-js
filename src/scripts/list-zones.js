import '@babel/polyfill'
import { printError, verifyEnvironmentVariables } from './util'
import PowerDNSApi from '../api/powerdns'

function listZones() {
    // Check that environment variables are set
    verifyEnvironmentVariables()

    // Get environment variables
    const host = process.env.POWERDNS_HOST
    const port = process.env.POWERDNS_PORT
    const apiKey = process.env.POWERDNS_API_KEY

    const api = new PowerDNSApi(host, port, apiKey)
    var zones = []
    try{
        zones = api.getZones()
    } catch (e) {
        printError(e)
    }

    console.table(zones)
}

listZones()