import { useRouter } from 'next/router'

export default {
  logo: (
    <>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
      Toingg
      </span>
    </>
  ),
  project: {
    link: 'https://github.com/sahuljr7'
  },
  faviconGlyph: '✦',
  docsRepositoryBase: 'https://github.com/sahuljr7/Sahul_DevBook/issues',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s | Toingg'
      }
    }
  },   
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Toingg
        </p>
      </div>
    )
  },
  toc: {
    backToTop: true
  }
  // ... other theme options
}
