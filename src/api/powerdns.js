import 'isomorphic-fetch'
import Zone from './models/zone'

class PowerDNSApi {

    constructor(host, port, apiKey) {
        this.host = host
        this.port = port
        this.serverId = 'localhost'
        this.basePath = '/api/v1'
        // Authentication Header is required, otherwise the API rejects the requests
        this.authHeader = {'X-API-Key': apiKey}
    }

    // Calls the PowerDNS API to get all the zones.
    async getZones(){
        const url = `http://${this.host}:${this.port}${this.basePath}/servers/${this.serverId}/zones`
        const response = await fetch(url, {
            headers: new Headers(this.authHeader)
        })
        var zones = await response.json()
        return zones.map(zone => new Zone(zone))
    }

}

export default PowerDNSApi