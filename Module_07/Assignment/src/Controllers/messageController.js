exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"Message Created!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"Message Read!"});

};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"Message Deleted!"});


};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"Message Updated!"});
};