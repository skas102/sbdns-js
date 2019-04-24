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
    getZones(){

        return [
            new Zone({
                'id': 'example.com.',
                'name': 'example.com.',
                'kind': 'Native',
                'nameservers': [],
                'dnssec': 0
            }),
            new Zone({
                'id': 'example1.com.',
                'name': 'example1.com.',
                'kind': 'Native',
                'nameservers': [],
                'dnssec': 0
            })
        ]
    }
}

export default PowerDNSApi