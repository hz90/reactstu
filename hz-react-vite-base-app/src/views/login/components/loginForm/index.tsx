/*
 * @FilePath: /vite-project/src/views/login/components/loginForm/index.tsx
 * @Description: 登录表单
 *
 */
import { Button, Form, Input } from 'antd';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import { UserOutlined, LockOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { login } from '@/api/modules/user';
import { getRolePermissions } from '@/api/modules/role';
import { globalStore } from '@/stores';

const LoginForm = observer(() => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { loading, run } = useRequest(login, {
    manual: true, // 手动触发
    onSuccess: result => {
      globalStore.setUserInfo(result);
      rolePermissionsObj.run({ id: result.id });
    }
  });

  const rolePermissionsObj = useRequest(getRolePermissions, {
    manual: true,
    onSuccess: result => {
      globalStore.setPermissions(result.permissions);
      navigate('/home/index');
      console.log('rolePermissionsObj', result);
    }
  });

  // login
  const onFinish = (loginForm: any) => {
    run(loginForm);
    console.log('navigate', navigate);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 5 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      size="large"
      autoComplete="off"
    >
      <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
        <Input placeholder="admin" prefix={<UserOutlined />} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
        <Input.Password autoComplete="new-password" placeholder="123456" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item className="login-btn">
        <Button
          onClick={() => {
            form.resetFields();
          }}
          icon={<CloseCircleOutlined />}
        >
          重置
        </Button>
        <Button loading={loading} type="primary" htmlType="submit" icon={<UserOutlined />}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
});

export default LoginForm;
