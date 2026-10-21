import './SiteFooter.css';

/** ICP 备案号（工信部备案管理系统） */
const ICP_BEIAN = '晋ICP备2023020746号-2';
const ICP_BEIAN_URL = 'https://beian.miit.gov.cn/';
/** 公安联网备案号（全国互联网安全管理服务平台） */
const POLICE_BEIAN = '晋公网安备14010602111139号';
const POLICE_BEIAN_CODE = '14010602111139';
const POLICE_BEIAN_URL = `https://beian.mps.gov.cn/#/query/webSearch?code=${POLICE_BEIAN_CODE}`;
/** 官方公安备案图标（public/beian.png，20×20）；带 base 前缀，子路径部署也能取到 */
const POLICE_BEIAN_ICON = `${import.meta.env.BASE_URL}beian.png`;

/**
 * 网站底部备案信息。
 * 纯展示组件：不读写编辑器状态，只占用自身高度，不遮挡任何现有内容。
 * 合规要点：ICP 备案号链接工信部备案系统；公安备案号以官方图标在左、备案号在右排列，
 * 并链接全国互联网安全管理服务平台的对应查询页。
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="网站备案信息">
      <div className="site-footer-inner">
        <a
          className="site-footer-link"
          href={ICP_BEIAN_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="工业和信息化部 ICP/IP地址/域名信息备案管理系统"
        >
          {ICP_BEIAN}
        </a>
        <span className="site-footer-divider" aria-hidden="true" />
        <a
          className="site-footer-link site-footer-police"
          href={POLICE_BEIAN_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="全国互联网安全管理服务平台"
        >
          <img
            className="site-footer-beian-icon"
            src={POLICE_BEIAN_ICON}
            alt="公安备案图标"
            width={20}
            height={20}
          />
          <span>{POLICE_BEIAN}</span>
        </a>
      </div>
    </footer>
  );
}
