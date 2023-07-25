// import React from "react";
// import { Provider, TitleBar, useNavigate } from "@shopify/app-bridge-react";
// import { Card, Layout, Page } from "@shopify/polaris";
// import { makeStyles } from "@material-ui/core/styles";


// const useStyles = makeStyles((theme) => ({
//     root: {
//         backgroundColor: "#222222",
//         "& > *": {
//           margin: 0, // removes margin from child elements
//         },
//       },
//       title: {
//         color: "#ff4060",
//         textAlign: "center",
//         textTransform: "uppercase",
//         fontSize: "36px",
//         fontFamily: "Bruno Ace SC",
//       },
//       projectContainer: {
//         backgroundColor: "#222222",
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         maxWidth: "1200px",
//         margin: "0 auto",
//         gap: "20px",
//       },
//     project: {
//       padding: "20px",
//       borderRadius: "10px",
//       width: "300px",
//       transition: "all 0.3s ease-in-out",
//       boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
//       transform: "translateY(0)",
//       backgroundColor: "#222222",
//       margin: "10px",
//       border: "4px solid",
//       borderImage: "linear-gradient(#f18137, #af24dd) 1",
//       animation: "$anim-border 2.5s ease-in infinite",
//       "&:hover": {
//         backgroundColor: "#3f51b5",
//       },
//     },
//     projectImageContainer: {
//       height: "200px",
//       marginBottom: "10px",
//     },
//     projectImage: {
//       height: "100%",
//       width: "100%",
//       objectFit: "cover",
//       border: "5px solid #3f51b5",
//     },
//     projectName: {
//       color: "#ff4060",
//       marginTop: "10px",
//       fontFamily: "Bruno Ace SC",
//     },
//     projectDescription: {
//       color: "#ff4060",
//       marginTop: "10px",
//       fontFamily: "Space Mono",
//     },
//     "@keyframes anim-border": {
//       "50%": {
//         borderImage: "linear-gradient(360deg, #f18137, #af24dd) 1",
//       },
//     },
//   }));


//   const QRCodes = [
//     {
//       title: "QR Code 1",
//       description: "This is a description for QR Code 1",
//       id: "1",
//     },
//     {
//       title: "QR Code 2",
//       description: "This is a description for QR Code 2",
//       id: "2",
//     },
//     // add more QR codes as needed
//   ];

//   const config = {
//     apiKey: '12345',  // Replace with your Shopify API key
//     shopOrigin: 'my-shop.myshopify.com',  // Replace with your shop's origin
//     forceRedirect: true,
//   };
  
//   export default function Shop() {
//     const navigate = useNavigate();
//     const classes = useStyles();
  
//     return (
//       <Provider config={config}>
//         <div className={classes.root}>
//           <Page>
//             <TitleBar
//               title="QR codes"
//               primaryAction={{
//                 content: "Create QR code",
//                 onAction: () => navigate("/qrcodes/new"),
//               }}
//             />
  
//             <Layout>
//               <Layout.Section>
//                 <div className={classes.projectContainer}>
//                   {QRCodes.map((qrcode, index) => (
//                     <Card
//                       key={index}
//                       title={qrcode.title}
//                       sectioned
//                       onClick={() => navigate(`/qrcodes/${qrcode.id}`)}
//                     >
//                       <p>{qrcode.description}</p>
//                     </Card>
//                   ))}
//                 </div>
//               </Layout.Section>
//             </Layout>
//           </Page>
//         </div>
//       </Provider>
//     );
//   }