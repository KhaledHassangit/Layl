import React from "react";
import { Col, Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdAddBox } from "react-icons/md";
import { ColorPicker } from "react-color-palette";
import "react-color-palette/css";
import { useDropzone } from "react-dropzone";
import { FaTimes } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import AddProductHook from "../../CustomHooks/Admin/AddProduct-Hook";
import { Link } from "react-router-dom"

const AdminAddProduct = () => {
  const {
    displayColorPicker,
    category,
    subcategory,
    userPrice,
    merchantPrice,
    freeShipping,
    viewAtUserStore,
    viewAtMerchantStore,
    description,
    images,
    setImages,
    colors,
    quantity,
    color,
    setColor,
    handleCategoryChange,
    handleSubcategoryChange,
    handleUserPriceChange,
    handleMerchantPriceChange,
    handleFreeShippingChange,
    handleViewAtUserStoreChange,
    handleViewAtMerchantStoreChange,
    handleDescriptionChange,
    handleRemoveImage,
    handleSaveColor,
    handleSubmit,
    handleClick,
    handleClose,
    handleQuantityChange,
    handleRemoveColor,
    colorPickerRef,
    SubCategoryResponse,
    CategoryResponse,
    onDrop, filteredSubcategories, loading
  } = AddProductHook();

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "image/webp", multiple: true });
  return (
    <main
      className="mt-5 admin-addProduct admin-bg"
      dir="rtl"
      style={{ minHeight: "725px", width: "100%", margin: "0 auto" }}
    >
      <Container>
        <Row>
          <div className="main-container">
            <h5 className="mb-3 mt-3">إضافة منتج</h5>
            <Row className="d-flex justify-content-between">
              <Col md="6" sm="12">
                <Row>
                  <Form >
                    <div className="d-flex gap-3 justify-content-between align-items-center">
                      <Form.Group as={Row} className="mb-3 w-100">
                        <Col sm="12" className="position-relative">
                          <Form.Control
                            as="select"
                            className="custom-select"
                            value={category}
                            onChange={handleCategoryChange}
                          >
                            <option value="">اختر الفئة</option>
                            {CategoryResponse && CategoryResponse.data ? (
                              CategoryResponse.data.length > 0 ? (
                                CategoryResponse.data.map((cat) => (
                                  <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                  </option>
                                ))
                              ) : (
                                <option disabled>لا توجد فئات</option>
                              )
                            ) : (
                              <option disabled>Loading...</option>
                            )}
                          </Form.Control>


                          <TiArrowSortedDown className="select-arrow-icon" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3 w-100">
                        <Col sm="12" className="position-relative">
                          <Form.Control
                            as="select"
                            className="custom-select"
                            value={subcategory}
                            onChange={handleSubcategoryChange}
                          >
                            <option value="">الفئة الفرعية</option>
                            {filteredSubcategories.length > 0 ? (
                              filteredSubcategories.map((sub) => (
                                <option key={sub.id} value={sub.id}>
                                  {sub.name}
                                </option>
                              ))
                            ) : (
                              <option disabled>حدد فئة أولاً</option>
                            )}
                          </Form.Control>

                          <TiArrowSortedDown className="select-arrow-icon" />
                        </Col>
                      </Form.Group>
                    </div>

                    <div className="d-flex gap-3 justify-content-between align-items-center">
                      <Form.Group as={Row} className="mb-3 w-100">
                        <Col sm="12">
                          <Form.Control
                            type="number"
                            placeholder=" السعر للتجار"
                            value={merchantPrice}
                            onChange={handleMerchantPriceChange}
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3 w-100">
                        <Col sm="12">
                          <Form.Control
                            type="number"
                            placeholder="السعر للمستخدم "
                            value={userPrice}
                            onChange={handleUserPriceChange}
                          />
                        </Col>
                      </Form.Group>
                    </div>

                    <Form.Group as={Row} className="mb-3 w-100">
                      <Col sm="12">
                        <Form.Control
                          as="textarea"
                          rows={8}
                          placeholder=" وصف المنتج"
                          value={description}
                          onChange={handleDescriptionChange}
                        />
                      </Col>
                    </Form.Group>

                  </Form>
                </Row>

                <Row>
                  <div className="color-pallet mb-2">
                    <h5 className="mb-3 mt-2">لون المنتج</h5>
                    <div className="prod-details d-flex flex-wrap gap-sm-3 justify-content-sm-center justify-content-lg-start align-items-start">
                      <div className="d-flex flex-column gap-3 gap-xs-1">
                        {colors.map((col, index) => (
                          <div
                            key={index}
                            className="prod-color"
                            onClick={() => handleRemoveColor(index)}
                          >
                            <span
                              style={{
                                backgroundColor: col.color,
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                              }}
                              className="color"
                            ></span>
                            <span className="hex-color">{col.color}</span>
                          </div>
                        ))}
                      </div>
                      <div className="d-flex flex-column gap-3">
                        {colors.map((col, index) => (
                          <div key={index} className="prod-quantity flex-column mb-2">
                            <span className="hex-color">الكمية</span>
                            <input
                              type="number"
                              value={col.quantity}
                              onChange={(e) => handleQuantityChange(e, index)}
                              className="quantity"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="">
                        <div className="add-color" onClick={handleClick}>
                          <span className="newColor">
                            <MdAddBox />
                          </span>
                          <span className="text"> أضافة لون جديد </span>
                        </div>
                        {displayColorPicker ? (
                          <div className="popover" ref={colorPickerRef}>
                            <div className="cover" onClick={handleClose} />
                            <ColorPicker color={color} onChange={setColor} />
                            <button className="save-button" onClick={handleSaveColor}>
                              Save Color
                            </button>
                          </div>
                        ) : null}

                      </div>
                    </div>
                  </div>
                </Row>
              </Col>

              <Col md="6" sm="12" className="text-center">
                <div>
                  <div {...getRootProps({ className: 'dropzone large-dropzone' })}>
                    <input {...getInputProps()} />
                    {images.length > 0 ? (
                      <div className="position-relative">
                        <img src={images[0].preview} alt="preview-0" />
                        <FaTimes className="remove-image-icon" onClick={() => handleRemoveImage(0)} />
                      </div>
                    ) : (
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <MdAddBox />
                        <p>اضغط هنا لاضافة صورة المنتج</p>
                      </div>
                    )}
                  </div>
                  <div className="image-preview-container">
                    {[1, 2, 3].map((imgIndex) => (
                      <div key={imgIndex} {...getRootProps({ className: "dropzone small-dropzone" })}>
                        <input {...getInputProps()} />
                        {images[imgIndex] ? (
                          <div className="position-relative">
                            <img src={images[imgIndex].preview} alt={`preview-${imgIndex}`} />
                            <FaTimes className="remove-image-icon" onClick={() => handleRemoveImage(imgIndex)} />
                          </div>
                        ) : (
                          <div className="d-flex flex-column justify-content-center align-items-center">
                            <MdAddBox style={{ width: "24px", height: "24px" }} />
                            <p>اضغط هنا لاضافة صورة المنتج</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="checkbox-container">
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      id="userPage"
                      name="userPage"
                      checked={viewAtUserStore}
                      onChange={handleViewAtUserStoreChange}
                    />
                    <label htmlFor="userPage">إظهار في صفحة المستخدم</label>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      id="merchantPage"
                      name="merchantPage"
                      checked={viewAtMerchantStore}
                      onChange={handleViewAtMerchantStoreChange}
                    />
                    <label htmlFor="merchantPage">إظهار في صفحة التاجر</label>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      id="freeDelivery"
                      name="freeDelivery"
                      checked={freeShipping}
                      onChange={handleFreeShippingChange}
                    />
                    <label htmlFor="freeDelivery">خدمة التوصيل المجاني</label>
                  </div>
                </div>
              </Col>

              <div className="handel-save">
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  className="save"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "حفظ"
                  )}
                </Button>

                <Link to="/admin/products" style={{ textDecoration: "none" }}>
                  <Button className="cancel">إلغاء</Button>
                </Link>
              </div>
            </Row>
          </div>
        </Row>
        <ToastContainer />
      </Container>
    </main>
  );
};

export default AdminAddProduct;

