const User = require("./user.model")


const postData = async(req, res) => {

    const postdata = req.body;
    // console.log(postdata, "///////")
    const adding = User.create(postdata)

    res.status(200).json(adding)

}
const getData = async (req, res) => {

    const findData = await User.findAll({})
    res.status(200).json(findData)
}
const getDataId = async (req, res) => {
    //const id = req.params.id
    const findData = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json(findData)
}
const updateData = async (req, res,) => {
    const update1 = req.body
    const userid = req.params.id;
    //console.log(update1)
    const findData = await User.update(update1, {
        where: { id: userid }
    })
    //console.log(userid)
    res.status(200).json(findData)
}

const deleteData = async (req, res) => {
    //const id = req.params.id
    const findData = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: "delete succesefully" })
}
module.exports = { postData, getData, getDataId, deleteData, updateData }