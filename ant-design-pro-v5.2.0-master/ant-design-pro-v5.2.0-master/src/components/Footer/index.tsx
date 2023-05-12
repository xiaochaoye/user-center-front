import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import {My_Link} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '超出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '摸鱼',
          title: '摸鱼',
          href: 'https://www.crazygames.com/',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> 小超耶 Github</>,
          href: My_Link,
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
