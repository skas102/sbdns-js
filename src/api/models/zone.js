// Wrapper for the Zone object returned by the PowerDNS API
class Zone {
    constructor(rawData) {
        const keys = ['id', 'name', 'kind', 'nameservers', 'dnssec']

        for (var key in rawData) {
            if (keys.indexOf(key) >= 0) {
                this[key] = rawData[key]
            }
        }
    }
}

export default Zone