import { Typography, Input, Button, InputNumber, Select, Modal } from "antd";
import { useState } from "react";
import useUserStore from "../Stores/userStore";

const { Title } = Typography;
const ProfileEdit = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const detail = useUserStore((state) => state.userDetails);
  const [userDetail, setUserDetail] = useState(detail);
  const [nameDisabled, setNameDisabled] = useState(true);
  const [ageDisabled, setAgeDisabled] = useState(true);
  const [genderDisabled, setGenderDisabled] = useState(true);

  // display model containing user values.

  const showModal = () => {
    setIsModalVisible(true);
  };

  // hide modal 

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // toggle input fields of name, age and gender to edit.

  const toggleName = (e) => {
    setNameDisabled(!nameDisabled);
  };
  const toggleAge = () => {
    setAgeDisabled(!ageDisabled);
  };
  const toggleGender = () => {
    setGenderDisabled(!genderDisabled);
  };

  // save state of name,age and gender to useState hook

  const handleChangeName = (e) => {
    const key = e.target.id;
    setUserDetail({
      ...userDetail,
      [key]: e.target.value,
    });
  };
  const handleChange = (name) => (value) => {
    setUserDetail({
      ...userDetail,
      [name]: value,
    });
  };

  // update user details 

  const updateInfo = useUserStore((state) => state.updateInfo);

  // profile edit component 
  
  const updateDetails = () => {
    updateInfo(userDetail);
    alert("saved");
  };
  return (
    <div className="main">
      <Title className="title-text">Edit Profile</Title>
      <div className="user-content">
        <Input
          id="name"
          value={userDetail.name}
          disabled={nameDisabled}
          onChange={handleChangeName}
        />
        <Button className="edit-btn" onClick={toggleName}>
          Edit Name
        </Button>
      </div>
      <div className="user-content">
        <InputNumber
          value={userDetail.age}
          min={1}
          disabled={ageDisabled}
          onChange={handleChange("age")}
        />
        <Button className="edit-btn" onClick={toggleAge}>
          Edit Age
        </Button>
      </div>
      <div className="user-content">
        <Select
          data-id="gender"
          placeholder="Select Gender"
          value={userDetail.gender}
          allowClear
          disabled={genderDisabled}
          onChange={handleChange("gender")}
        >
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
          <Select.Option value="other">other</Select.Option>
        </Select>
        <Button className="edit-btn" onClick={toggleGender}>
          Edit Gender
        </Button>
      </div>
      <div className="action-btns">
        <Button className="action-btn" onClick={updateDetails}>
          Save Details
        </Button>
        <Button
          className="action-btn"
          onClick={showModal}
          ant-click-animating-without-extra-node="false"
        >
          View Details
        </Button>

        <Modal
          title="User Details"
          visible={isModalVisible}
          
          onCancel={handleCancel}
          footer={null}
        >
          <p>Name : {detail.name}</p>
          <p>Age : {detail.age}</p>
          <p>Gender : {detail.gender}</p>
        </Modal>
      </div>
    </div>
  );
};

export default ProfileEdit;
