import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const RemoteTicketsApp = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Helper to check if string is a valid UUID or numeric ID
  const isValidId = (str: string): boolean => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    const numericRegex = /^\d+$/;
    return uuidRegex.test(str) || numericRegex.test(str);
  };

  // Dynamic route resolver
  const getComponent = () => {
    if (!Array.isArray(slug)) {
      return dynamic(() => import("./pages"), { ssr: false });
    }

    try {
      // Build the path segments
      const pathSegments = [...slug];
      const lastSegment = pathSegments[pathSegments.length - 1];

      // Check if the last segment is an ID
      if (isValidId(lastSegment)) {
        // Remove the ID from the path and store it
        pathSegments.pop();
        // Join the remaining segments to form the component path
        const componentPath = pathSegments.join("/");
        // Create the dynamic import path
        return dynamic(
          () =>
            import(`./components/${componentPath}/Wrapper`).catch(
              () =>
                // Fallback to pages directory if component doesn't exist
                import(`./pages/${componentPath}/[id]`)
            ),
          { ssr: false }
        );
      }

      // For non-ID routes, try to load from pages directory
      const pagePath = slug.join("/");
      return dynamic(() => import(`./pages/${pagePath}`), {
        ssr: false,
        loading: () => <div>Loading...</div>,
      });
    } catch (error) {
      console.error("Route resolution error:", error);
      return dynamic(() => import("./pages"), { ssr: false });
    }
  };
  interface PageComponentProps {
    id?: string | null;
  }

  const PageComponent = getComponent() as React.ComponentType<PageComponentProps>;

  return <PageComponent id={Array.isArray(slug) ? slug[slug.length - 1] : null} />;
};

export default RemoteTicketsApp;
