
import { Button, Form, Input, Upload, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAddProductMutation } from '../../Api/products';
import { AiOutlineLoading3Quarters, AiOutlineUpload } from 'react-icons/ai';

type FieldType = {
  name?: string;
  price?: number;
  description?: string;
  images?: string
};

const AdminProductAdd= () => {
  const [addProduct,{isLoading:isAddProduct}]=useAddProductMutation()
  const [messageApi, contextHolder] = message.useMessage();
  const [form]=Form.useForm()
  const navigate=useNavigate()

const onFinish = (values: any) => {
  addProduct(values).unwrap().then(async()=>{
   form.resetFields()
   messageApi.open({
    type:"success",
    content:"Thêm sản phẩm thành công"
   })   
 
   navigate("/admin/product");

  })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};



  return(
    <>
     <header className="mb-4">
                <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
            </header>
            {contextHolder}
     <Form
     form={form}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Tên sản phẩm"
      name='name'
      rules={[
        { required: true, message: 'Vui lòng nhập tên sản phẩm !' },
        { min:3,message:'Tên sản phẩm phải nhập ít nhất 3 ký tự'}
      
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Giá sản phẩm" 
      name='price'
      rules={[{ required: true, message: 'Please input your price!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Chi tiết sản phẩm" 
      name='description'
      rules={[{ required: true, message: 'Please input your price!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Hình ảnh" 
      name='images'
     
    >
        <Upload 
        name="image"
        listType="picture"
        fileList={[]} 
      >
        <Button icon={<AiOutlineUpload />}>Upload Image</Button>
      </Upload>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" danger htmlType="submit">
        {isAddProduct ? (<AiOutlineLoading3Quarters className='animate-spin'/> ):("Thêm sản phẩm")}
      </Button>
    </Form.Item>
  </Form>
    </>
  );
  };

export default AdminProductAdd;