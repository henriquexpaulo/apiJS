class HomeContoller {
  index(req, res) {
    res.json({
      tudoCerto: true,
    });
  }
}

export default new HomeContoller();
