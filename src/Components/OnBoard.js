import { Button, Form, Input, InputNumber, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { SendOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import useUserStore from "../Stores/userStore";

const { Title } = Typography;
const { Option } = Select;

// align fields.

const layout = {
  labelCol: {
    span: 7,
  },
  size: "middle",
};

// onBoarding component

const OnBoard = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  // add values to store

  const updateInfo = useUserStore((state) => state.updateInfo);


  // submit form values

  const onFinish = (values) => {
    updateInfo(values);
    navigate("/profile");
  };
  return (
    <div className="main">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Title>Welcome Aboard!</Title>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber min={1} className="age-input"/>
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Select Gender" allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item className="btn-div">
          <Button type="primary" htmlType="submit">
            Continue
            <SendOutlined className="send-icon" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OnBoard;
