import {
  useGetProductsQuery,
  useRemoveProductMutation
} from "../../Api/products";
import { Button, Popconfirm, Skeleton, Table, message, Image } from "antd";
import { render } from "react-dom";
import { Link } from "react-router-dom";

type Props = {};

const AdminProductList = (props: Props) => {
  const { data, isLoading: isLoadingProduct } = useGetProductsQuery();
  const [removeProduct] = useRemoveProductMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const dataSource = data?.map((item: any) => ({
    key: item.id,
    name: item.name,
    price: item.price,
    description: item.description,
    images: item.images
  }));

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description"
    },
    {
      title: "Images",
      dataIndex: "images",
      key: "images",
      render: (images: string) => <Image src={images} width={80} />
    },
    {
      title: "Action",
      render: ({ key: id }: { key: number | string }) => (
        <div>
          <Popconfirm
          title="Xóa sản phẩm "
          description="Bạn có chắc muốn xóa không ?"
          onConfirm={() => {
            //Thực hiện xóa
            removeProduct(id)
              .unwrap()
              .then(() => {
                messageApi.open({
                  type: "success",
                  content: "Xóa sản phẩm thành công"
                });
              });
          }}
          okText="Có"
          cancelText="Không"
        >
          <Button danger>Xóa</Button>
        </Popconfirm>
        <Button type="primary" danger className="ml-2">
          <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
        </Button>
        </div>
      )
    }
  ];

  return (
    <div>
      <header className="flex justify-between mb-4">
        <div className="font-bold text-2xl">Quản lý sản phẩm</div>
        <Button type="primary" danger>
          <Link to="/admin/product/add">Thêm sản phẩm</Link>
        </Button>
      </header>
      {contextHolder}
      {isLoadingProduct ? (
        <Skeleton active paragraph={{ rows: 6 }} />
      ) : (
        <Table dataSource={dataSource} columns={columns} />
      )}
    </div>
  );
};

export default AdminProductList;
