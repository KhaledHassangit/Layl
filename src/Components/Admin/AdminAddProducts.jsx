import React, { useState, useEffect, useRef } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdAddBox } from "react-icons/md";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import { useDropzone } from "react-dropzone";
import { FaTimes } from "react-icons/fa";

const AdminAddProduct = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useColor("hex", "#FFFFFF");
  const [colors, setColors] = useState([]);
  const colorPickerRef = useRef(null);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleSaveColor = () => {
    setColors([...colors, color.hex]);
    setDisplayColorPicker(false);
  };

  const handleRemoveColor = (index) => {
    const newColors = colors.filter((_, i) => i !== index);
    setColors(newColors);
  };

  const handleClickOutside = (event) => {
    if (
      colorPickerRef.current &&
      !colorPickerRef.current.contains(event.target)
    ) {
      handleClose();
    }
  };

  const [images, setImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length + images.length <= 4) {
      setImages([
        ...images,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    } else {
      alert("You can only upload a maximum of 4 images");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (displayColorPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [displayColorPicker]);

  const [quantity, setQuantity] = useState(1000);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <main
      className="mt-5 admin-addProduct  mt-5 admin-bg"
      dir="rtl"
      style={{ minHeight: "725px", Width: "100%", margin: "0 auto" }}>
      <Container>
        <Row>
          <div className="main-container ">
            <h5 className="mb-3 mt-3">إضافة منتج</h5>
            <Row className="d-flex justify-content-between ">
              <Col md="6 " sm="12">
                <Row >
                  <Form>
                    <div className="d-flex   gap-3 justify-content-between align-items-center">
                      <Form.Group as={Row} className="mb-3 w-100">
                        <Col sm="12" className="position-relative">
                          <Form.Control as="select" className="custom-select">
                            <option>اختر القيمة</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </Form.Control>
                          <TiArrowSortedDown className="select-arrow-icon" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3 w-100">
                        <Col sm="12" className="position-relative">
                          <Form.Control as="select" className="custom-select">
                            <option> القيمة الفرعية</option>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                          </Form.Control>
                          <TiArrowSortedDown className="select-arrow-icon" />
                        </Col>
                      </Form.Group>
                    </div>

                    <div className="d-flex   gap-3 justify-content-between align-items-center">
                      <Form.Group as={Row} className="mb-3 w-100">
                        <Col sm="12">
                          <Form.Control
                            type="text"
                            placeholder=" السعر للتجار"
                          />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} className="mb-3 w-100">
                        <Col sm="12">
                          <Form.Control
                            type="text"
                            placeholder="السعر للمستخدم "
                          />
                        </Col>
                      </Form.Group>
                    </div>

                    <Form.Group as={Row} className="mb-3  w-100">
                      <Col sm="12">
                        <Form.Control
                          as="textarea"
                          rows={8}
                          type="number"
                          placeholder=" وصف المنتج"
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Row>

                <Row>
                  <div className="color-pallet mb-2">
                    <h5 className="mb-3 mt-2">لون المنتج </h5>
                    <div className="prod-details d-flex flex-wrap gap-sm-3  justify-content-sm-center justify-content-sm-center justify-content-lg-start align-items-start">
                      <div className="d-flex flex-column gap-3 gap-xs-1">
                        {colors.map((col, index) => (
                          <div
                            key={index}
                            className="prod-color  "
                            onClick={() => handleRemoveColor(index)}
                          >
                            <span
                              style={{
                                backgroundColor: col,
                                width: "20px",
                                height: "20px",
                                borderRadius: "50%",
                              }}
                              className="color"
                            ></span>
                            <span className="hex-color">{col}</span>
                          </div>
                        ))}
                      </div>
                      <div className="d-flex flex-column gap-3">
                        {colors.map((col, index) => (
                          <div
                            key={index}
                            className="prod-quantity flex-column mb-2"
                          >
                            <span className="hex-color">الكمية</span>
                            <input
                              type="number"
                              value={quantity}
                              onChange={handleQuantityChange}
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
                            <button
                              className="save-button"
                              onClick={handleSaveColor}
                            >
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
                  <div
                    {...getRootProps({ className: "dropzone large-dropzone" })}
                  >
                    <input {...getInputProps()} />
                    {images[0] ? (
                      <div className="position-relative">
                        <img src={images[0].preview} alt="preview-0" />
                        <FaTimes
                          className="remove-image-icon"
                          onClick={() => handleRemoveImage(0)}
                        />
                      </div>
                    ) : (
                      <div className="d-flex flex-column justify-content-center align-items-center ">
                        <MdAddBox />
                        <p>اضغط هنا لاضافة صورة المنتج</p>
                      </div>
                    )}
                  </div>
                  <div className="image-preview-container">
                    {[1, 2, 3].map((index) => (
                      <div
                        key={index}
                        {...getRootProps({
                          className: "dropzone small-dropzone",
                        })}
                      >
                        <input {...getInputProps()} />
                        {images[index] ? (
                          <div className="position-relative">
                            <img
                              src={images[index].preview}
                              alt={`preview-${index}`}
                            />
                            <FaTimes
                              className="remove-image-icon"
                              onClick={() => handleRemoveImage(index)}
                            />
                          </div>
                        ) : (
                          <div className="d-flex flex-column justify-content-center align-items-center ">
                            <MdAddBox
                              style={{ width: "24px", height: "24px" }}
                            />
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
                    />
                    <label htmlFor="userPage">إظهار في صفحة المستخدم</label>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      id="merchantPage"
                      name="merchantPage"
                    />
                    <label htmlFor="merchantPage">إظهار في صفحة التاجر</label>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      id="freeDelivery"
                      name="freeDelivery"
                    />
                    <label htmlFor="freeDelivery">خدمة التوصيل المجاني</label>
                  </div>
                </div>
              </Col>

              <div className="handel-save">
                <Button className="save">حفظ </Button>
                <Button className="cancel">إلغاء</Button>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </main>
  );
};

export default AdminAddProduct;
