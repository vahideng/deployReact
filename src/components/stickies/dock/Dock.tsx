import React, { Component } from "react";

interface TooltipProps {
  tipChildren?: any;
}

class Tooltip extends Component<TooltipProps, {}> {
  state = {
    clicked: true
  };
  render() {
    return <div>{this.props.tipChildren}</div>;
  }
}

export default Tooltip;

// import React from "react";
// import classes from "./Dock.module.css";
// import Tag from "src/components/tags/Tag";
// import ActionButtons from "src/components/buttons/actionButtons/ActionButtons";

// interface Props {
//   // list: {
//   //   name: string;
//   //   color: string;
//   //   backgroundColor: { top: string; bottom: string };
//   //   text: string;
//   // }[];
// }Hom

// const Dock: React.FC<Props> = () => {
//   return (
//     <div>
//       <div className={classes.DockTag}>
//         <Tag text="How may I help you?" />
//       </div>
//       <div className={classes.DockMainDiv}>
//         <div className={classes.DockInnerDiv}>
//           <ActionButtons
//             list={[
//               {
//                 name: "Health",
//                 color: "#ffffff",
//                 backgroundColor: {
//                   top: "#FFC5A2",
//                   bottom: "#EA5702"
//                 },
//                 text: "Cash Advance"
//               },
//               {
//                 name: "Health",
//                 color: "#ffffff",
//                 backgroundColor: {
//                   top: "#FFC5A2",
//                   bottom: "#EA5702"
//                 },
//                 text: "Cash Advance"
//               },
//               {
//                 name: "Health",
//                 color: "#ffffff",
//                 backgroundColor: {
//                   top: "#FFC5A2",
//                   bottom: "#EA5702"
//                 },
//                 text: "Cash Advance"
//               },
//               {
//                 name: "Health",
//                 color: "#ffffff",
//                 backgroundColor: {
//                   top: "#FFC5A2",
//                   bottom: "#EA5702"
//                 },
//                 text: "Cash Advance"
//               },
//               {
//                 name: "Health",
//                 color: "#ffffff",
//                 backgroundColor: {
//                   top: "#FFC5A2",
//                   bottom: "#EA5702"
//                 },
//                 text: "Cash Advance"
//               }
//             ]}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dock;
