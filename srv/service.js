const cds = require('@sap/cds');


class service extends cds.ApplicationService {
    async init() {
        const {
            Roots,
            OtherRoots,
        } = this.entities



        this.on("READ", OtherRoots, async (req, next) => {
            
            let response = await next();
            
            return  JSON.parse(JSON.stringify(response));

        })

        this.after("READ", OtherRoots, async (data, req, res) => {
            console.log("After OtherRoots READ", data);
        })



        await super.init();
    }
}

module.exports = service;