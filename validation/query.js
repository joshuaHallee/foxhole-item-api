const validateQuery = async(req, res, next) => {
    try {
        const incomingQueryArgs = req.query
        const acceptedQueryArgs = ['itemCategory','isMpfCraftable']
        
        // check if any query keys are passed that are unsupported
        if(Object.keys(req.query).length !== 0) {
            for(const [key, value] of Object.entries(incomingQueryArgs)) {
                if (!acceptedQueryArgs.includes(key)) return res.status(400).json(`unsupported query key: ${key}`)
            }
        }

        // check if isMpfCraftable is a bool, converts to bool
        let validatedIsMpfCraftable;
        if(req.query.isMpfCraftable) {
            const untestedBool = req.query.isMpfCraftable.toLowerCase()
            if(untestedBool != 'false' && untestedBool != 'true') return res.status(400).json(`bool validation error on: ${untestedBool}`)
            if(untestedBool == 'false') validatedIsMpfCraftable = false
            if(untestedBool == 'true') validatedIsMpfCraftable = true
        }
        
        // create search query
        let searchQuery = { }
        if (req.query.itemCategory) {
            searchQuery.itemCategory = req.query.itemCategory
        }
        if (req.query.isMpfCraftable) {
            searchQuery.isMpfCraftable = validatedIsMpfCraftable
        }

        return searchQuery
    } catch (err) {
        res.status(500).json(err)
    }
}

module.exports.validateQuery = validateQuery