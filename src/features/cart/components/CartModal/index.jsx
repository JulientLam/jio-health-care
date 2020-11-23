import { removeItemInUserCart } from "actions/actionCreator";
import { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import "./style.css";
function buildFlug(srt) {
  return srt
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .replaceAll(/đ/g, "d")
    .replaceAll(/Đ/g, "D")
    .trim()
    .replaceAll(" ", "_");
}

function CartModal(props) {
  const listItem = useSelector((state) => state.cart.userCart);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const onDelete = (event) => {
    const itemId = event.currentTarget.dataset["itemid"];
    dispatch(removeItemInUserCart(itemId));
  };

  useEffect(() => {
    const amount =
      listItem && listItem.length > 0
        ? listItem
            .map((item) => item.itemsDetail["afterTaxPrice"] * item.total)
            .reduce((total, price) => {
              return total + price;
            })
        : 0;
    setTotal(amount);
  }, [listItem]);

  return (
    <Modal
      id="user-cart"
      className="jio-modal-cart"
      tabIndex="-1"
      role="dialog"
      isOpen={props.isOpen}
    >
      <div className=" row" role="document" style={{ minWidth: "73%" }}>
        <div className="modal-content row">
          <ModalHeader style={{ padding: "1rem 1rem" }}>
            Giỏ Hàng
            <button
              type="button"
              className="close"
              onClick={() => {
                props.controlModal();
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </ModalHeader>
          <div className="col-md-12 d-flex justify-content-around jio-list-title-modal">
            <div className="col-sm-6 jio-modal-header-text">SẢN PHẨM</div>
            <div className="col-sm-3 jio-modal-header-text">SỐ LƯỢNG</div>
            <div className="col-sm-3 jio-modal-header-text">THÀNH TIỀN</div>
          </div>

          <ModalBody>
            <div className="jio-scroll">
              {!listItem ? (
                <div> Không có sản phầm nào</div>
              ) : (
                listItem.map((item, index) => (
                  <div className="row" key={index}>
                    <div className="col-md-6">
                      <div className="card jio-item-card">
                        <img
                          className="card-img-left"
                          src={item.itemsDetail.images[0].images[0].url}
                          alt="Card cap"
                          style={{ maxWidth: "93px", float: "left" }}
                        />
                        <div className="card-body" style={{ float: "right" }}>
                          <p className="card-text jio-text-cart-item">
                            {item.itemsDetail["title"]}
                          </p>
                          <p style={{ color: "gray" }}>
                            {item.itemsDetail["packaging"]}
                          </p>
                          <div className="d-inline-flex">
                            <Link
                              to={{
                                pathname: `/${buildFlug(
                                  item.itemsDetail["title"]
                                )}_${item.itemsDetail["ePProductVarietyID"]}`,
                                total: item.total,
                              }}
                              onClick={() => {
                                props.controlModal();
                              }}
                              className="cursor-pointer"
                            >
                              XEM
                            </Link>
                            <span
                              className="text-grey"
                              style={{ margin: "0 10px" }}
                            >
                              |
                            </span>
                            <Button
                              className=" btn btn-link cursor-pointer jio-button-link"
                              data-itemid={
                                item.itemsDetail["ePProductVarietyID"]
                              }
                              role="button"
                              onClick={onDelete}
                            >
                              XÓA
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 jio-large-text">
                      {item.total}
                      <span className="jio-medium-text">
                        x
                        <NumberFormat
                          value={item.itemsDetail["afterTaxPrice"]}
                          displayType={"text"}
                          thousandSeparator={true}
                        />
                      </span>
                    </div>
                    <div className="col-md-3 jio-large-text">
                      <NumberFormat
                        value={item.itemsDetail["afterTaxPrice"] * item.total}
                        displayType={"text"}
                        thousandSeparator={true}
                        suffix={"đ"}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
            <br />
            <hr />
            <div className="row jio-large-text">
              <div className="col-md-9">Tổng Cộng :</div>
              <div className="col-md-3">
                <NumberFormat
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"đ"}
                />
              </div>
            </div>
          </ModalBody>

          <div className="modal-footer">
            <a href="/" className="btn btn-secondary">
              Tiếp tục mua hàng
            </a>

            <button
              type="button"
              className="btn btn-primary"
              hidden={!listItem}
            >
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CartModal;
