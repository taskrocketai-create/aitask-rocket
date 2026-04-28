import 'piccolore';
import { n as decodeKey } from './chunks/astro/server_DblOTofr.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CS1bPBV-.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/runner/work/task-rocket/task-rocket/","cacheDir":"file:///home/runner/work/task-rocket/task-rocket/node_modules/.astro/","outDir":"file:///home/runner/work/task-rocket/task-rocket/dist/","srcDir":"file:///home/runner/work/task-rocket/task-rocket/src/","publicDir":"file:///home/runner/work/task-rocket/task-rocket/public/","buildClientDir":"file:///home/runner/work/task-rocket/task-rocket/dist/client/","buildServerDir":"file:///home/runner/work/task-rocket/task-rocket/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/checkout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/checkout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/checkout.ts","pathname":"/api/checkout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.kqcbBVYP.css"}],"routeData":{"route":"/[...slug]","isIndex":false,"type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/runner/work/task-rocket/task-rocket/src/pages/[...slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/checkout@_@ts":"pages/api/checkout.astro.mjs","\u0000@astro-page:src/pages/[...slug]@_@astro":"pages/_---slug_.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_D2w2ib5C.mjs","/home/runner/work/task-rocket/task-rocket/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BlqFlAQW.mjs","@/components/Router":"_astro/Router.oX4BF1HS.js","@astrojs/react/client.js":"_astro/client.BxrnOY3m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi.UfHQLFS_.woff2","/_astro/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi.C20gE9Bt.woff2","/_astro/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi.COB1BCSH.woff2","/_astro/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.CG0v8orw.woff2","/_astro/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.p6IpLZeA.woff2","/_astro/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.BeNAS_4P.woff2","/_astro/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.Dk9Pm7OY.woff2","/_astro/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.D0hf-lZB.woff2","/_astro/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkC3kaSTbQWt4N.Cd-9R_Eg.woff2","/_astro/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.5a10_2AF.woff2","/_astro/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkBXkaSTbQWt4N._7srfSsq.woff2","/_astro/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkaHkaSTbQWt4N.C8mZfAMu.woff2","/_astro/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkenkaSTbQWt4N.CGR_R-bc.woff2","/_astro/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkCXkaSTbQWt4N.D0Pf8eLg.woff2","/_astro/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkCHkaSTbQWt4N.BbAMJUrd.woff2","/_astro/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.CE6ORPGb.woff2","/_astro/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.CeLhucAw.woff2","/_astro/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.CYVgFitr.woff2","/_astro/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw._BxPweOD.woff2","/_astro/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.DUB8LBMV.woff2","/_astro/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.D53FebXc.woff2","/_astro/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkAnkaSTbQWt4N.ByvTSsRH.woff2","/_astro/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.ThqUyHr0.woff2","/_astro/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkBnkaSTbQWg.BpwuAS-O.woff2","/_astro/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi.D3gk-SlI.woff2","/_astro/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.DSCY9ty2.woff2","/_astro/_slug_.kqcbBVYP.css","/error.svg","/_astro/Router.oX4BF1HS.js","/_astro/browser.Bm2dAhs3.js","/_astro/client.BxrnOY3m.js","/_astro/index.C5ichdrw.js","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkAnkaSTbQWt4N.woff2","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkBXkaSTbQWt4N.woff2","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkBnkaSTbQWg.woff2","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkC3kaSTbQWt4N.woff2","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkCHkaSTbQWt4N.woff2","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkCXkaSTbQWt4N.woff2","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkCnkaSTbQWt4N.woff2","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkaHkaSTbQWt4N.woff2","/fonts/roboto/v51/KFO5CnqEu92Fr1Mu53ZEC9_Vu3r1gIhOszmkenkaSTbQWt4N.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3-UBHMdazTgWw.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3CUBHMdazTgWw.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3GUBHMdazTgWw.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3KUBHMdazTgWw.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3OUBHMdazTgWw.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3iUBHMdazTgWw.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMawCUBHMdazTgWw.woff2","/fonts/roboto/v51/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBHMdazTgWw.woff2","/fonts/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxC7m0dR9pBOi.woff2","/fonts/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxi7m0dR9pBOi.woff2","/fonts/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRxy7m0dR9pBOi.woff2","/fonts/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRyS7m0dR9pA.woff2","/fonts/montserrat/v31/JTUQjIg1_i6t8kCHKm459WxRzS7m0dR9pBOi.woff2","/fonts/montserrat/v31/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2","/fonts/montserrat/v31/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2","/fonts/montserrat/v31/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2","/fonts/montserrat/v31/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2","/fonts/montserrat/v31/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2"],"buildFormat":"directory","checkOrigin":false,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"cHaq0yTwIB7eu0yYZC/3X2wiglkCJGQLjK6fM659/LU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
