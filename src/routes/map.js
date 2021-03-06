var express = require('express');
var router = express.Router();
var dbMng = require('../modules/DatabaseManager').create();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('map', { title: 'Hệ thống Giá đất tỉnh Bình Dương' });
});

router.post('/thuadat/timkiem', function (req, res) {
  console.log(req.body);
  // res.status(200).send('ok');
  dbMng.findThuaDat(req.body).then(result => {
    res.status(200).send(result);
  }).catch(e => {
    res.status(400).send('Đã có lỗi xảy ra');
  })
});
router.post('/timduong', function (req, res) {
  // res.status(200).send('ok');
  dbMng.findStreet(req.body.text).then(result => {
    res.status(200).send(result);
  }).catch(e => {
    res.status(400).send('Đã có lỗi xảy ra');
  })
});
router.post('/thuadat/chitiet', function (req, res) {
  dbMng.chitietthuadat(req.body).then(result => {
    res.status(200).send(result);
  }).catch(e => {
    res.status(400).send('Đã có lỗi xảy ra');
  })
});
router.post('/thuadat/xemgiadat', function (req, res) {
  dbMng.xemGiaDat(req.body).then(result => {
    res.status(200).send(result);
  }).catch(e => {
    res.status(400).send('Đã có lỗi xảy ra');
  })
});
router.post('/thuadat/chuyenmucdich', function (req, res) {
  dbMng.chuyenDoiGiaDat(req.body).then(result => {
    res.status(200).send(result);
  }).catch(e => {
    res.status(400).send('Đã có lỗi xảy ra');
  })
});
router.post('/thuadat/mdsd', function (req, res) {
  dbMng.loaiMucDichSD(req.body).then(result => {
    res.status(200).send(result);
  }).catch(e => {
    res.status(400).send('Đã có lỗi xảy ra');
  })
});
router.post('/thuadat/cungcapgiadat', function (req, res) {
  dbMng.cungCapGiaDat(req.body).then(result => {
    res.status(200).send(result);
  }).catch(e => {
    res.status(400).send('Đã có lỗi xảy ra');
  })
});
module.exports = router;
