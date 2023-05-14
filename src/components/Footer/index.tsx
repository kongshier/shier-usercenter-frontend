import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { CSDN_LINK, PLANET_LINK } from '@/constants';

const Footer: React.FC = () => {
  const defaultMessage = '猫十二懿出品';
  const currentYear = new Date().getFullYear();
  const beian = '桂ICP备2023002099号-1';
  const beianUrl = 'https://beian.miit.gov.cn/#/Integrated/index';
  return (
    <DefaultFooter
      // @ts-ignore
      copyright={
        <>
          {currentYear} {defaultMessage} |{' '}
          <a href={beianUrl} target="_blank" rel="noreferrer">
            {beian}
          </a>
        </>
      }
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
