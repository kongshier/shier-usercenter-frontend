import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { CSDN_LINK, PLANET_LINK } from '@/constants';

const Footer: React.FC = () => {
  const defaultMessage = '猫十二懿出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '加入的学习圈子',
          title: '学习圈子',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: '猫十二懿',
          title: '十二博客',
          href: CSDN_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined />
              十二 Github
            </>
          ),
          href: 'https://github.com/kongshier',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
