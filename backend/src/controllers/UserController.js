const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
  async show(req, res) {
    const { idUser } = req.params;
    const user = await User.findById(idUser);

    if (!user) {
      return res.status(404).json({
        message: "User does not exists."
      });
    }

    return res.json(user);
  },
  async store(req, res) {
    if (!req.body) {
      return res.status(400).json({
        message: "User content can not be empty."
      });
    }

    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({
        message: "Email already being used."
      });
    }

    const user = await User.create(req.body);

    return res.json(user);
  },
  async update(req, res) {
    const user = await User.findOneAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(user);
  }
};
