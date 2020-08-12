import React from 'react';
import { Cascader } from 'antd';
import { Redirect } from 'react-router-dom';

const CascaderComponent = () => {
  const options = [
    {
      value: 'Company',
      label: 'Company',
      children: [
        {
          value: 'Popular Entities',
          label: 'Popular Entities',
          children: [
            {
              value: 'Company Registration',
              label: 'Company Registration',
              link: '/company',
            },
            {
              value: 'Proprietorship Firm Registration',
              label: 'Proprietorship Firm Registration',
            },
            {
              value: 'Unregistered Partnership',
              label: 'Unregistered Partnership',
            },
            {
              value: 'Registered Partnership',
              label: 'Registered Partnership',
            },
            {
              value: 'Limited Limited Proprietorship (LLP)',
              label: 'Limited Limited Proprietorship (LLP)',
            },
          ],
        },
        {
          value: 'Speacial Entities',
          label: 'Speacial Entities',
          children: [
            {
              value: 'Import Export Code',
              label: 'Import Export Code',
              link: '#/import-export-code',
            },
            {
              value: 'ISO Registration',
              label: 'ISO Registration',
              link: '#/iso',
            },
          ],
        },
      ],
    },
    {
      value: 'Property',
      label: 'Property',
      children: [
        {
          value: 'Trademark',
          label: 'Trademark',
          children: [
            {
              value: 'Trademark Registration',
              label: 'Trademark Registration',
            },
            {
              value: 'Trademark Objection',
              label: 'Trademark Objection',
            },
            {
              value: 'Trademark Renewal',
              label: 'Trademark Renewal',
            },
          ],
        },
        {
          value: 'Others',
          label: 'Others',
          children: [
            {
              value: 'Copyright Registration',
              label: 'Copyright Registration',
            },
          ],
        },
      ],
    },
    {
      value: 'Tax-Filing',
      label: 'Tax-Filing',
      children: [
        {
          value: 'Goods & Services Tax',
          label: 'Goods & Services Tax',
          children: [
            {
              value: 'GST Registration',
              label: 'GST Registration',
              link: '#/gst',
            },
            {
              value: 'GST Return - 1',
              label: 'GST Return - 1',
              link: '#/gst-return',
            },
            {
              value: 'GST Return - 3B',
              label: 'GST Return - 3B',
              link: '#/gst-return',
            },
            {
              value: 'GST Return - 4',
              label: 'GST Return - 4',
              link: '#/gst-return',
            },
            {
              value: 'GST Return - 9',
              label: 'GST Return - 9',
              link: '#/gst-return',
            },
          ],
        },
        {
          value: 'Income Tax Return',
          label: 'Income Tax Return',
          children: [
            {
              value: 'Income Tax Return-1',
              label: 'Income Tax Return-1',
            },
            {
              value: 'Income Tax Return-2',
              label: 'Income Tax Return-2',
            },
            {
              value: 'Income Tax Return-3',
              label: 'Income Tax Return-3',
            },
            {
              value: 'Income Tax Return-4',
              label: 'Income Tax Return-4',
            },
            {
              value: 'Income Tax Return-5',
              label: 'Income Tax Return-5',
            },
            {
              value: 'Income Tax Return-6',
              label: 'Income Tax Return-6',
            },
            {
              value: 'Income Tax Return-7',
              label: 'Income Tax Return-7',
            },
          ],
        },
        {
          value: 'Others',
          label: 'Others',
          children: [
            {
              value: 'TDS Return',
              label: 'TDS Return',
              link: '#/tax-deducted-at-source',
            },
            {
              value: 'Excise Return',
              label: 'Excise Return',
            },
          ],
        },
      ],
    },
    {
      value: 'Compliances',
      label: 'Compliances',
      children: [
        {
          value: 'Annual Compliance',
          label: 'Annual Compliance',
          children: [
            {
              value: 'Private Limited Company',
              label: 'Private Limited Company',
            },
            {
              value: 'LLP Annual Compliances',
              label: 'LLP Annual Compliances',
            },
            {
              value: 'Partnership Firm, Society, NGO, Trust',
              label: 'Partnership Firm, Society, NGO, Trust',
            },
          ],
        },
        {
          value: 'Payroll Compliance',
          label: 'Payroll Compliance',
          children: [
            {
              value: 'PF Registration',
              label: 'PF Registration',
              link: '#/provident-fund',
            },
            {
              value: 'PF Return Filing',
              label: 'PF Return Filing',
            },
            {
              value: 'ESI Registration',
              label: 'ESI Registration',
              link: '#/employees-state-insurance',
            },
            {
              value: 'ESI Return Filing',
              label: 'ESI Return Filing',
              link: '#/employees-state-insurance-return',
            },
          ],
        },
        {
          value: 'Others',
          label: 'Others',
          children: [
            {
              value: 'PAN Application',
              label: 'PAN Application',
            },
            {
              value: 'TAN Application',
              label: 'TAN Application',
            },
            {
              value: '80G Registration',
              label: '80G Registration',
            },
          ],
        },
      ],
    },
    {
      value: 'Resources',
      label: 'Resources',
      children: [
        {
          value: 'Website Policies',
          label: 'Website Policies',
          children: [
            {
              value: 'Terms And Conditions',
              label: 'Terms And Conditions',
            },
            {
              value: 'Privacy Policy',
              label: 'Privacy Policy',
            },
            {
              value: 'Declimar Policy',
              label: 'Declimar Policy',
            },
          ],
        },
      ],
    },
  ];
  function onChange(value, link) {
    console.log(value);
    const page = (window.location.href = link[2].link);
    console.log(page);
    return <Redirect to={page} />;
  }
  return (
    <React.Fragment>
      <Cascader options={options} onChange={onChange} placeholder='Services' />
    </React.Fragment>
  );
};

export default CascaderComponent;

// ------------------------------------------------------------ //

// const CascaderComponent = () => {
//   const { SubMenu } = Menu;
//   const menu = (
//     <Menu>
//       {options.map((option) => (
//         <Menu.ItemGroup key={option.label}>
//           <SubMenu title={option.value}>
//             {option.children.map((child) => (
//               <SubMenu key={child.label} title={child.value}>
//                 {child.children.map((subChild) => (
//                   <Menu.Item key={subChild.label}>{subChild.value}</Menu.Item>
//                 ))}
//               </SubMenu>
//             ))}
//           </SubMenu>
//         </Menu.ItemGroup>
//       ))}
//     </Menu>
//   );
//   return (
//     <React.Fragment>
//       <Dropdown overlay={menu}>
//         <a
//           style={{
//             fontWeight: '600',
//             fontSize: '16px',
//             padding: '0 14px',
//             color: '#fff',
//             fontFamily: 'Source Sans Pro',
//           }}
//           onClick={(e) => e.preventDefault()}>
//           Sevices <DownOutlined style={{ margin: '0 12px' }} />
//         </a>
//       </Dropdown>
//     </React.Fragment>
//   );
// };
