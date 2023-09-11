exports.create = async (req, res) => {
    res.status(200).json({status:"Success",data:"Blog Created!"});
};


exports.read = async (req, res) => {
    res.status(200).json({status:"Success",data:"Blog Read!"});

};


exports.delete = async (req, res) => {
    res.status(200).json({status:"Success",data:"Blog Deleted!"});


};


exports.update = async (req, res) => {
    res.status(200).json({status:"Success",data:"Blog Updated!"});
};