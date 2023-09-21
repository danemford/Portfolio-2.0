// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-lg font-bold">{children}</h4>,
    h5: ({ children }) => <h5 className="text-base font-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-sm font-bold">{children}</h6>,
    p: ({ children }) => <p className="text-sm font-light">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
    li: ({ children }) => <li className="text-sm font-light">{children}</li>,
    a: ({ children, href }) => <a className="text-sm font-light" href={href}>{children}</a>,
    ...components,
  }
}