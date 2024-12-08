import "../css/app.css";
import "./bootstrap";

import { createInertiaApp, router } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import Spinner from "@/Components/Spinner";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : `${appName}`),
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        function AppWrapper(props) {

            // const [loading, setLoading] = useState(false);
            // For spinner testing
            // useEffect(() => {
            //     setTimeout(() => {
            //         setLoading(false);
            //     }, 2000);
            // }, []);
            // useEffect(() => {
            //     // Only start loading for page visits (method is undefined or 'get')
            //     const startLoading = (event) => {
            //       if (!event.detail.visit.method || event.detail.visit.method === 'get') {
            //         setLoading(true);
            //       }
            //     };
                
            //     // Stop loading when navigation completes
            //     const stopLoading = (event) => {
            //       if (!event.detail.visit.method || event.detail.visit.method === 'get') {
            //         setLoading(false);
            //       }
            //     };
        
            //     // Add event listeners for Inertia router events
            //     document.addEventListener('inertia:start', startLoading);
            //     document.addEventListener('inertia:finish', stopLoading);
        
            //     // Cleanup event listeners
            //     return () => {
            //       document.removeEventListener('inertia:start', startLoading);
            //       document.removeEventListener('inertia:finish', stopLoading);
            //     };
            //   }, []);
            // if (loading) {
            //     return <Spinner />;
            // }

            return (<App {...props} />);
        }

        root.render(<AppWrapper {...props} />);
    },
    progress: {
        color: "#ffffff",
        showSpinner: true,
        delay: 250,
        timeout: 1000,
    },
});
