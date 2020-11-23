import "./style.css";
function Footer() {
  return (
    <div className="jio-footer-background">
      <div className="row">
        <div className="col-lg-5 col-sm-12 list-left">
          <div className="justify-content-between">
            <img
              alt="Jio Icon"
              className="lazyloaded jio-footer-image-icon"
              data-src="https://cdn.jiohealth.com/pharmacy/otc-website/assets/icons/jio-icon-green@3x.png"
              src="https://cdn.jiohealth.com/pharmacy/otc-website/assets/icons/jio-icon-green@3x.png"
            />
            <h1 className="text-green inline-block font-bold jio-footer-logo-text">
              Jio Health
            </h1>
          </div>
          <div>
            <h5 className="jio-footer-color-header">Liên hệ với chúng tôi</h5>
            <h6 className="jio-footer-color-text">
              Điện thoại: 0283840952 - Hotline: 1900636893
            </h6>
            <h6 className="jio-footer-color-text">
              Hỗ Trợ: support@jiohealth.com
            </h6>
            <h6 className="jio-footer-color-text">
              Copyright © 2018 Jio Health
            </h6>
          </div>
        </div>
        <div className="jio-footer-breakLine"></div>
        <div className="col-lg-6 col-sm-12">
          <div className="row">
            <div className="col-sm-4">
              <h5 className="jio-footer-color-header">Service</h5>
              <h6 className="jio-footer-color-text">Trò Chuyện Với Dược Sĩ</h6>
              <h6 className="jio-footer-color-text">Nhà Thuốc Jio</h6>
            </div>

            <div className="col-sm-4">
              <h5 className="jio-footer-color-header">Tìm Hiểu Thêm</h5>
              <h6 className="jio-footer-color-text">Dịch Vụ Thăm Khám</h6>
            </div>

            <div className="col-sm-4">
              <h5 className="jio-footer-color-header">Hỗ Trợ Khách Hàng</h5>
              <h6 className="jio-footer-color-text">Câu Hỏi Thường Gặp</h6>
              <h6 className="jio-footer-color-text">Chính Sách Bảo Mật</h6>
              <h6 className="jio-footer-color-text">Điều Khoản</h6>
              <h6 className="jio-footer-color-text">Liên hệ</h6>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ backgroundColor: "aliceblue" }} />
      <div className="row">
        <div className="col-lg-10 col-sm-12 jio-footer-color-text">
          <h5>CÔNG TY TNHH PHÒNG KHÁM ĐA KHOA JIO HEALTH</h5>
          <p className="jio-footer-font-text">
            Giấy CNĐKDN: 0309145924, đăng ký lần đầu ngày 06/07/2009, đăng ký
            thay đổi lần thứ 5 ngày 07/02/2018, cấp bởi Sở KHĐT thành phố Hồ Chí
            Minh.
          </p>
          <p className="jio-footer-font-text">
            Địa chỉ: 30 Nguyễn Văn Lạc, Phường 19, Quận Bình Thạnh, TP.HCM
          </p>
        </div>
        <div className="col-lg-2 col-sm-12 ">
          <img
            alt="announcement"
            className="announcement lazyloaded jio-footer-image-logo "
            data-src="https://cdn.jiohealth.com/pharmacy/otc-website/assets/images/dathongbao.png"
            src="https://cdn.jiohealth.com/pharmacy/otc-website/assets/images/dathongbao.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
