exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"Comment Created!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"Comment Read!"});

};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"Comment Deleted!"});


};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"Comment Updated!"});
};