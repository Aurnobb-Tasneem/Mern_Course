exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"Product Created!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"Product Read!"});

};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"Product Deleted!"});


};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"Product Updated!"});
};