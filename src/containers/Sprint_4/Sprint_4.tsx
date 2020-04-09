import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Paragraphs from '../../components/assets/typography';
import styled from 'styled-components';
import Navbar from 'src/components/headers/navbar/Navbar';
import NavbarTransparent from 'src/components/headers/navbarTransparent/NavbarTransparent';
import TextDropdown from 'src/components/inputs/texDropdown/TextDropdown';
import AmDropdown from 'src/components/amDropdown/AmDropdown';
import TextButton from 'src/components/buttons/textButton/TextButton';
import AmAccordion from 'src/components/amAccordion/AmAccordion';
import LinkList from 'src/components/lists/linkList/LinkList';
import ToggleButton from 'src/components/buttons/toggleButton/ToggleButton';
import ConfirmNotes from 'src/components/confirmNotes/ConfirmNotes';
import Icon from 'src/components/assets/icons/icon';
import InputField from 'src/components/inputs/inputFields/InputFields';
import PrimaryButton from 'src/components/buttons/primaryButton/PrimaryButton';
import ViewRate from 'src/components/viewRate/ViewRate';
const { B_13_ORANGE_463, B_13_BLACK, B_13_GREY444 } = Paragraphs;
const Title = styled(B_13_ORANGE_463)`
  text-align: center;
  padding: 5px 0;
  margin: 5px 0;
  border-top: 1px solid #ffa463;
  border-bottom: 1px solid #ffa463;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;

  padding: 2rem 0;
`;
interface Props {}

const Sprint3: React.FC<Props> = () => {
  const [selectedItem, setSelectedOption] = useState('Persian');
  const [sprint1, setSprint1] = useState(false);
  const [sprint2, setSprint2] = useState(false);
  const [sprint3, setSprint3] = useState(false);
  const [sprint4, setSprint4] = useState(false);
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [linkListClear, setLinkListClear] = useState(false);
  const [linkListInputValue, setLinkListInputValue] = useState('');
  const [linkListBtnColor, setLinkListBtnColor] = useState({
    top: '#BDBDBD',
    bottom: '#BDBDBD',
  });
  const [viewRateType, setViewRateType] = useState('test_value3');
  const [showDropdown, setShowDropDown] = useState(false);
  if (sprint1 === true) {
    return <Redirect to="/sprint-1" />;
  }

  if (sprint2 === true) {
    return <Redirect to="/sprint-2" />;
  }

  if (sprint3 === true) {
    return <Redirect to="/sprint-3" />;
  }

  if (sprint4 === true) {
    return <Redirect to="/sprint-4" />;
  }

  if (homeRedirect === true) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ paddingTop: 100 }}>
      <Navbar
        icon={{
          onIconClick: () => {
            setHomeRedirect(true);
          },
        }}
        profile={{
          greeting: 'Good Morning',
          name: 'Adam Constantine',
          alt: 'AVATAR',
          src:
            'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
        }}
        rightButtons={[
          {
            iconName: 'Time',
            onButtonClick: () => alert('button-1-Clicked'),
          },
          {
            iconName: 'Settings',
            onButtonClick: () => alert('button-2-Clicked'),
          },
          {
            iconName: 'Share',
            onButtonClick: () => alert('button-3-Clicked'),
          },
        ]}
      />
      <Title>View Rate Container</Title>
      <CenteredDiv
        style={{
          margin: '0 auto',
          width: '36.25rem',
        }}
      >
        <AmDropdown
          label="Product Type"
          dropdownData={[
            { value: 'test_value', label: 'Conventional Fixed Deposit 1' },
            { value: 'test_value2', label: 'Conventional Fixed Deposit 2' },
            { value: 'test_value3', label: 'Conventional Fixed Deposit 3' },
          ]}
          value={viewRateType}
          icon={{ name: 'Clock', color: '#ff2626', size: 30 }}
          handleChange={(item: any) => {
            const { value } = item;
            setViewRateType(value);
            setShowDropDown(false);
          }}
          placeholder="Select test"
          clickOnArrow={() => {
            setShowDropDown(!showDropdown);
          }}
          inputClickHandler={() => {}}
          onBlur={() => {
            setShowDropDown(false);
          }}
          showDropdown={showDropdown}
          arrowIcon
        />
      </CenteredDiv>

      <CenteredDiv
        style={{
          margin: '0 auto',
          width: '31.6rem',
          justifyContent: 'flex-start',
        }}
      >
        <B_13_GREY444>Effective Date</B_13_GREY444>
        <B_13_BLACK>&nbsp;11 Mar 2020</B_13_BLACK>
      </CenteredDiv>
      <Title>View Rate</Title>
      <CenteredDiv
        style={{
          margin: '0 auto',
          width: '30rem',
        }}
      >
        <ViewRate
          testId="sprint_4_view_rate"
          title={{
            content: '** Rates are subject to change',
          }}
          subtitle={{
            content:
              'Note: Customer with Reward Code may be entitled additional rate in AmOnline.',
          }}
          data={{
            headers: [
              {
                style: {},
                values: ['Tenure'],
              },
              {
                style: { textAlign: 'center', fontWeight: 'bold' },
                values: ['Board Rate', '(% p.a.)'],
              },
              {
                style: { textAlign: 'center', fontWeight: 'bold' },
                values: ['AmOnline Rate', '(% p.a.)'],
              },
            ],
            values: [
              ['1 Month', '2.95', '2.95'],
              ['2 Month', '2.95', '2.95'],
              ['3 Month', '2.95', '2.95'],
              ['4 Month', '3.95', '2.95'],
              ['5 Month', '2.95', '2.95'],
              ['6 Month', '2.95', '2.95'],
              ['7 Month', '6.95', '2.95'],
            ],
          }}
        />
      </CenteredDiv>
      <Title>Confirm Notes</Title>
      <CenteredDiv
        style={{
          margin: '1rem 15rem',
        }}
      >
        <ConfirmNotes
          testId="sprint_4_confirm_notes"
          title={{
            content: 'Important Notes',
            style: { fontSize: '2rem' },
          }}
          body={[
            {
              content:
                'This is not the final confirmation of your payment. Please check with your merchant for final status confirmation.',
              style: {},
            },
            {
              content:
                'Please click on the “Continue with Transaction” button below and do not close the browser until final receipt is displayed',
              style: {},
            },
          ]}
        />
      </CenteredDiv>
      <Title>Navbar Transparent</Title>
      <NavbarTransparent
        icon={{
          onIconClick: () => {
            setSprint1(true);
          },
        }}
        rightButtons={[
          <TextButton
            buttonText="Sprint-1"
            onTextClick={() => {
              setSprint1(true);
            }}
            buttonStyles={{
              color: '#000000',
              fontWeight: 400,
              fontSize: 15,
            }}
          />,
          <TextButton
            buttonText="Sprint-2"
            onTextClick={() => {
              setSprint2(true);
            }}
            buttonStyles={{
              color: '#000000',
              fontWeight: 400,
              fontSize: 15,
            }}
          />,
          <TextButton
            buttonText="Sprint-3"
            onTextClick={() => {
              setSprint3(true);
            }}
            buttonStyles={{
              color: '#000000',
              fontWeight: 400,
              fontSize: 15,
            }}
          />,
          <TextButton
            buttonText="Sprint-4"
            onTextClick={() => {
              setSprint4(true);
            }}
            buttonStyles={{
              color: '#000000',
              fontWeight: 400,
              fontSize: 15,
            }}
          />,
          <TextDropdown
            // menuIsOpen
            defaultValue={'Persian'}
            handleChange={(selectedOption: any) => {
              setSelectedOption(selectedOption);
              console.log(`Option:`, selectedOption);
            }}
            selectedOption={selectedItem}
            placeHolder={'English'}
            options={[
              { label: 'English', value: 'english' },
              { label: 'Malay', value: 'malay' },
              { label: 'Persian', value: 'persian' },
              { label: '中文', value: '中文' },
            ]}
          />,
        ]}
      />
      <Title>Input Accordian</Title>
      <CenteredDiv
        style={{
          margin: '5rem',
        }}
      >
        <AmAccordion
          testId={'testId'}
          data={[
            {
              id: 'id-1',
              title: 'Transfers',
              children: (
                <div>
                  <LinkList
                    testId="link_list_sprint_4_test"
                    defaultActiveKey="2"
                    list={[
                      {
                        label: 'Show on AmOnline',
                        rightItem: (
                          <ToggleButton
                            toggleOffLabel="NO"
                            toggleOnLabel="YES"
                            value={true}
                            onTogglePress={() => {}}
                          />
                        ),
                      },
                      { label: 'Change Card PIN' },
                      {
                        label: 'Nickname', // change Lastname
                        leftIcon: (
                          <Icon icon="Announcement" size={22} color="#444444" />
                        ),
                        bold: true, // chang false
                        cardStyle: {
                          backgroundColor: '#fff',
                        },
                        cardHeaderStyle: {
                          backgroundColor: '#fff',
                        },
                        onListClick: () => {
                          // window.alert(`clicked on item ${item.label}`);
                          // window.alert(`ITEM NAME:::: ${item.label}`)
                        },
                        // rightItem: (
                        //   <ToggleButton
                        //     toggleOffLabel="NO"
                        //     toggleOnLabel="YES"
                        //     value={true}
                        //     onTogglePress={() => {}}
                        //   />
                        // ), // change
                        expandable: true, // change false
                        expandableContent: (
                          <>
                            <InputField
                              type="text"
                              value=""
                              notValid={false}
                              handleChange={() => {}}
                              clearClickHandler={() => {}}
                              clearIcon={true}
                              label=""
                              icon={{ name: 'Lock' }}
                              errorMessage={{
                                errorText: 'something wrong',
                                subText: 'detail error',
                              }}
                              {...{
                                type: 'text', // change number
                                value: linkListInputValue,
                                notValid: false, // change true
                                handleChange: (e: any) => {
                                  // window.alert(`text change: ${e.target.value}`)
                                  setLinkListInputValue(e.target.value);
                                  setLinkListClear(true);
                                  setLinkListBtnColor({
                                    top: '#FF0D0D',
                                    bottom: '#FD8585',
                                  });
                                },
                                clearClickHandler: () => {
                                  // window.alert(`clear change`)
                                  setLinkListInputValue('');
                                  setLinkListClear(false);
                                  setLinkListBtnColor({
                                    top: '#BDBDBD',
                                    bottom: '#BDBDBD',
                                  });
                                },
                                clearIcon: linkListInputValue
                                  ? true
                                  : linkListClear, // change false
                                label: '', // change Test Input
                                icon: { name: 'Lock' }, // change Amy
                                errorMessage: {
                                  errorText: 'something wrong',
                                  subText: 'detail error',
                                },
                              }}
                            />
                            <PrimaryButton
                              onButtonClick={() => {
                                window.alert('Button Clicked');
                              }}
                              title={'Update'}
                              titleColor={'#fff'}
                              buttonColor={{
                                top: '#BDBDBD',
                                bottom: '#BDBDBD',
                              }}
                              {...{
                                onButtonClick: () => {
                                  alert('Button Clicked');
                                },
                                title: 'Update',
                                titleColor: '#fff',
                                buttonColor: linkListBtnColor,
                              }}
                            />
                          </>
                        ),
                        subtitle: [
                          'AmBank BonusLink Visa',
                          'AmBank BonusLink Mastercard', // change
                          // 'Another line of subtitle'
                        ],
                        leftBorderColor: 'red', // change green
                      },
                      { label: 'Block This Card' },
                      { label: 'Block This Replace This Card' },
                    ]}
                  />
                </div>
              ),
              buttonContent: {
                clickHandler: () => {
                  alert('Set device handler');
                },
                title: 'Setup now',
                titleColor: '#000000',
                buttonColor: {
                  top: '#F6F6F3',
                  bottom: '#EAE9E3',
                },
                icon: {
                  name: 'Settings',
                  color: '#000',
                },
              },
            },
            {
              id: 'id-2',
              title: 'Payments',
              children: <div></div>,
              buttonContent: {
                clickHandler: () => {
                  alert('Remove device handler');
                },
                title: 'Remove Device',
                titleColor: '#ffffff',
                icon: {
                  name: 'delete',
                  color: '#ffffff',
                },
              },
            },
            {
              id: 'id-2',
              title: 'Investments',
              children: <div></div>,
              buttonContent: {
                clickHandler: () => {
                  alert('Remove device handler');
                },
                title: 'Remove Device',
                titleColor: '#ffffff',
                icon: {
                  name: 'delete',
                  color: '#ffffff',
                },
              },
            },
            {
              id: 'id-2',
              title: 'Online Shopping',
              children: <div></div>,
              buttonContent: {
                clickHandler: () => {
                  alert('Remove device handler');
                },
                title: 'Remove Device',
                titleColor: '#ffffff',
                icon: {
                  name: 'delete',
                  color: '#ffffff',
                },
              },
            },
            {
              id: 'id-2',
              title: 'FPX Specific Merchant',
              children: <div></div>,
              buttonContent: {
                clickHandler: () => {
                  alert('Remove device handler');
                },
                title: 'Remove Device',
                titleColor: '#ffffff',
                icon: {
                  name: 'delete',
                  color: '#ffffff',
                },
              },
            },
          ]}
        ></AmAccordion>
      </CenteredDiv>
    </div>
  );
};

export default Sprint3;
