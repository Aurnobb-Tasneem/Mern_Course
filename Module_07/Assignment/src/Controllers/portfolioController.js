exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"Portfolio Created!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"Portfolio Read!"});

};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"Portfolio Deleted!"});


};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"Portfolio Updated!"});
};