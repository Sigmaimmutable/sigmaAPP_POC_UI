const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/platform/v1/userinfo',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/userinfo',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/visitinfo',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/visitinfo',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/userexists',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/userexists',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/templateusage',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/templateusage',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/uservisitrecord',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/uservisitrecord',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/payment',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/payment',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/invoice',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/invoice',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/generateinvoice',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/generateinvoice',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/network',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/network',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/org',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/org',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/userdetail',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/userdetail',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/userdetailsid',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/userdetailsid',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/sigmadocsummary/:id*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/sigmadocsummary/:id*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/sigmadocsummary',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/sigmadocsummary',
      changeOrigin: true,
    })
  );

  app.use(
    '/api/v1/consortia/:status*/environments/:type*/services',
    createProxyMiddleware({
      target: 'https://console.kaleido.io/api/v1/consortia/:status*/environments/:type*/services',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/session',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/session',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/resetpassword/:path*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/resetpassword/:path*',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/userprofile',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/userprofile',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/job',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/job',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/finalisedocs',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/finalisedocs',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/networkbytennatid',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/networkbytennatid',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/sigmanodesummary',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/sigmanodesummary',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/tx',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/tx',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/blocks',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/blocks',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/favourite',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/favourite',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/notification',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/notification',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/helpandsupport',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/helpandsupport',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobsfetch',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobsfetch',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/userdetailbytennantall',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/userdetailbytennantall',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/helpandsupportstatus',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/helpandsupportstatus',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobs',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobs',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobschedule',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobschedule',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/restdownload',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/restdownload',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobhandle',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobhandle',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/uservisitrecord',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/uservisitrecord',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/veevadocs',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/veevadocs',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/doccount',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/doccount',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/pwdcheck',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/pwdcheck',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/joblasttime',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/joblasttime',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/nfttxavalanche',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/nfttxavalanche',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/blockstxavalanche',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/blockstxavalanche',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/txinput',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/txinput',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/userdetail/:path*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/userdetail/:path*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/sigmadocbytid',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/sigmadocbytid',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/sigmadoc/:sigmaId',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in',
      changeOrigin: true,
      pathRewrite: (path, req) => {
        const sigmaId = req.params.sigmaId;
        return `/platform/v1/sigmadoc/${sigmaId}`;
      },
    })
  );


  app.use(
    '/platform/v1/notification/:emailid*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/notification/:emailid*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/notification/:emailid*/:statuses*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/notification/:emailid*/:statuses*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/notificationbyid',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/notificationbyid',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/helpandsupport/:pageNo*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/helpandsupport/:pageNo*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/helpandsupportstatus/:emailId*/:status*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/helpandsupportstatus/:emailId*/:status*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobsfetch/:pageNo*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobsfetch/:pageNo*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/userdetailbytennantall/:pageNo*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/userdetailbytennantall/:pageNo*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobs/:tenantId*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobs/:tenantId*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobsremove/:userId*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobsremove/:userId*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobschedule/:tennantid*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobschedule/:tennantid*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/updatedelay/:scheduletime*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/updatedelay/:scheduletime*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/jobhandle/:tennat*/:type*/:status*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/jobhandle/:tennat*/:type*/:status*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/uservisitrecord/:id*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/uservisitrecord/:id*',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/uservisitrecord/',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/uservisitrecord/',
      changeOrigin: true,
    })
  );

  app.use(
    '/platform/v1/nftdetails/:uid*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/nftdetails/:uid*',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/txinput/:tx*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/txinput/:tx*',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/blockstxavalanche/:blockno*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/blockstxavalanche/:blockno*',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/nfttxavalanche/:id*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/nfttxavalanche/:id*',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/pwdcheck/:emailid*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/pwdcheck/:emailid*',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/doccount/:id*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/doccount/:id*',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/veevadocs/:tennat/:type/:docid',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in',
      changeOrigin: true,
      pathRewrite: (path, req) => {
        const { tenant, type, docid } = req.params;
        return `/platform/v1/veevadocs/${tenant}/${type}/${docid}`;
      },
    })
  );
  app.use(
    '/platform/v1/sigmadoc',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/sigmadoc',
      changeOrigin: true,
    })
  );
  app.use(
    '/platform/v1/favourite/:emailId*/:sigmaId*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/favourite/:emailId*/:sigmaId*',
      changeOrigin: true,
    })
  );
 
  app.use(
    '/platform/v1/favourite/:emailId*',
    createProxyMiddleware({
      target: 'https://testavalanche.stasisonline.in/platform/v1/favourite/:emailId*',
      changeOrigin: true,
    })
  );
 
  
app.use(
    '/task/execute',
    createProxyMiddleware({
      target: 'https://go.truebit.network/task/execute',
      changeOrigin: true,
    })
  );
  app.use(
    '/task/:executionId/transcript',
    createProxyMiddleware({
      target: 'https://go.truebit.network',
      changeOrigin: true,
      pathRewrite: (path, req) => {
        const executionId = req.params.executionId;
        return `/task/${executionId}/transcript`;
      },
    })
  );
  app.use(
    '/task/:executionId/status',
    createProxyMiddleware({
      target: 'https://go.truebit.network',
      changeOrigin: true,
      pathRewrite: (path, req) => {
        const executionId = req.params.executionId;
        return `/task/${executionId}/status`;
      },
    })
  );
 
};
  