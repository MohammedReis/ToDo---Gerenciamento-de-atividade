const MacaddressValidation = (req,res,next) => {
    if(!req.body.macaddress){
        return res.status(400).json({error: 'Macaddress é obrigatorio'});
    }
    
    next();
    
};

module.exports = MacaddressValidation;

