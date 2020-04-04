import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Paragraphs from '../../components/assets/typography';
import styled from 'styled-components';
import Navbar from 'src/components/headers/navbar/Navbar';
import NavbarTransparent from 'src/components/headers/navbarTransparent/NavbarTransparent';
import TextDropdown from 'src/components/inputs/texDropdown/TextDropdown';
import TextButton from 'src/components/buttons/textButton/TextButton';
import TextWithDetails from 'src/components/infographic/textWithDetails/TextWithDetails';
import ArrayCheckBox from 'src/components/arrayCheckBox/ArrayCheckBox';
import LabelToolTip from 'src/components/labelToolTip/LabelToolTip';
import LabeledIcon from 'src/components/assets/icons/labeledIcon/LabeledIcon';
import images from 'src/assets';
import LocalImages from 'src/components/assets/images';
import List from 'src/components/lists/list/List';
import FormContainer from 'src/components/wrappers/formContainer/FormContainer';

import CenterMessage from 'src/components/infographic/centerMessage/CenterMessage';
import SettingModalCenter from 'src/components/modals/settingModalCenter/SettingModalCenter';
import StatusFormContainer from 'src/components/wrappers/statusFormContainer/StatusFormContainer';
import PrimaryButton from 'src/components/buttons/primaryButton/PrimaryButton';
import PieChartBox from 'src/components/pies/PieChartBox/PieChartBox';
import InputField from 'src/components/inputs/inputFields/InputFields';
import HeaderWithIButtons from 'src/components/headers/HeaderWithButtons/HeaderWithIButtons';
import HeaderWithIcons from 'src/components/headers/HeaderWithIcons/HeaderWithIcons';
import SearchBar from 'src/components/inputs/searchBar/SearchBar';
import TextWithLink from 'src/components/buttons/TextWithLink/TextWithLink';
import ImageModal from 'src/components/modals/ImageModal/ImageModal';
import SimpleHeader from 'src/components/headers/simpleHeader/SimpleHeader';
import SelectionTile from 'src/components/selections/selectionTile/SelectionTile';
import BarCode from 'src/components/barCode/barCode';
import StickyFooter from 'src/components/stickies/stickyFooter/StickyFooter';

import AmDropdown from 'src/components/amDropdown/AmDropdown';

import { MemoizedAmProfilePic as AmProfilePic } from 'src/components/amProfilePic/AmProfilePic';

import Icon from 'src/components/assets/icons/icon';

import AmProfileDetail from 'src/components/amProfileDetail/amProfileDetail';

const {
  B_13_ORANGE_463,
  R_12_WHITE,
  B_14_WHITE,
  B_24_BLACK,
  B_15_WHITE,
  B_32_BLACK,
  R_15_BLACK,
  SB_13_BLACK,
} = Paragraphs;
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
  const [homeRedirect, setHomeRedirect] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [sTileNum, setSTileNum] = useState(2);
  const [sTileNum1, setSTileNum1] = useState(0);
  const [sTileNum2, setSTileNum2] = useState(3);
  const [sTileNum3, setSTileNum3] = useState(1);
  const [stickyFooter, setStickyFooter] = useState(false);
  const [showDropdown, setDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('anything');
  const [tacClear, setTacClear] = useState(false);
  const [profileInputValue, setProfileInputValue] = useState('');
  const [buttonColor, setButtonColor] = useState({
    top: '#BDBDBD',
    bottom: '#BDBDBD',
  });

  const handlerDropdown = (item: any) => {
    console.log(item, 'dropdownValue');

    setDropdown(!showDropdown);
    setDropdownValue(item.value);
  };

  if (sprint1 === true) {
    return <Redirect to="/sprint-1" />;
  }

  if (sprint2 === true) {
    return <Redirect to="/sprint-2" />;
  }

  if (sprint3 === true) {
    return <Redirect to="/sprint-3" />;
  }

  if (homeRedirect === true) {
    return <Redirect to="/" />;
  }

  const handleCheckBox = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const checkBoxData = [
    {
      title: 'Indah',
      content: ['Biller Code: 68502', '0'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Kojadi',
      content: ['Biller Code: 68502', '1'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Indah',
      content: ['Biller Code: 68502', '2'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Indah',
      content: ['Biller Code: 68502', '3'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Astro',
      content: ['Biller Code: 68502', '4'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Syabas',
      content: ['Biller Code: 68502', '5'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Petronas',
      content: ['Biller Code: 68502', '6'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Time',
      content: ['Biller Code: 68502', '7'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'UNIFI',
      content: ['Biller Code: 68502', '8'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'TNB',
      content: ['Biller Code: 68502', '9'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Petronas',
      content: ['Biller Code: 68502', '10'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'Time',
      content: ['Biller Code: 68502', '11'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'UNIFI',
      content: ['Biller Code: 68502', '12'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
    {
      title: 'TNB',
      content: ['Biller Code: 68502', '13'],
      isCheckboxChecked: isCheckboxChecked,
      name: 'checkBox',
      onCheckClick: handleCheckBox,
    },
  ];

  console.log(dropdownValue, 'dropdownValue');

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
      <Title>ImageModal</Title>
      <CenteredDiv>
        <PrimaryButton
          title="Open ImageModal"
          onButtonClick={() => {
            setShowImageModal(true);
          }}
          width={'25rem'}
          buttonColor={{ top: '#FD8585', bottom: '#FF2222' }}
        />
        <ImageModal
          modalIsOpen={showImageModal}
          imgSrc={LocalImages.common.passwordSecurity}
          title="Keep your account safe"
          message="We have just changed our password policy. It is good for you to change it now to keep your account secured."
          buttonLabel="Continue"
          buttonLabelColor={'#FFF'}
          // buttonColor={{ top: "#FD8585", bottom: "#FF2222" }}
          onButtonClick={() => alert('Continue')}
          // leftButtonLabel="NO"
          // rightButtonLabel="YES"
          // onLeftButtonClick={()=>alert('NO')}
          // onRightButtonClick={()=>alert('YES')}
          // leftButtonLabelColor={'#000'}
          // leftButtonColor={{ top: "#F6F6F3", bottom: "#EAE9E3" }}
          // rightButtonLabelColor={'#FFF'}
          // rightButtonColor={{ top: "#FD8585", bottom: "#FF2222" }}

          onRequestClose={() => setShowImageModal(false)}
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
      <Title>Barcode</Title>
      <CenteredDiv style={{ backgroundColor: '#F7F7F7' }}>
        <BarCode imgSrc={images.common.SampleQRCode} />
      </CenteredDiv>
      <Title>AmDropDown</Title>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AmDropdown
          readOnly={true}
          disabled={false}
          clickOnArrow={() => setDropdown(!showDropdown)}
          showDropdown={showDropdown}
          dropdownData={[
            { value: 'ambank', label: 'am' },
            { value: 'Alpeh', label: 'alp' },
          ]}
          notValid={false}
          errorMessage={{
            testId: 'testId',
            errorText: 'The TAC is incorrect',
            subText: 'Please try again.',
          }}
          type="text"
          inputClickHandler={() => setDropdown(!showDropdown)}
          arrowIcon={true}
          label="dropdown label"
          icon={{ name: 'Account-2' }}
          value={dropdownValue}
          handleChange={item => handlerDropdown(item)}
        />
      </div>

      <Title>Pie Chart Box</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#F7F7F7',
          padding: '4rem',
        }}
      >
        <PieChartBox
          title={'YOUR CURRENT PORTFOLIO'}
          pieLabels={['Fixed Income 100%', 'Equity 0%', 'Mixed Assets 0% ']}
          pieDataSets={{
            data: [100, 0, 0],
            backgroundColor: ['#7AB497', '#FFA463', '#8677D9'],
          }}
        />
        <PieChartBox
          title={'Your Ideal Portfolio'}
          pieLabels={['Fixed Income 100%', 'Equity 0%']}
          pieDataSets={{
            data: [100, 0],
            backgroundColor: ['#7AB497', '#FFA463'],
          }}
        />
        <PieChartBox
          title={'YOUR CURRENT PORTFOLIO'}
          pieLabels={['Fixed Income 60%', 'Equity 20%', 'Mixed Assets 20% ']}
          pieDataSets={{
            data: [60, 20, 20],
            backgroundColor: ['#7AB497', '#FFA463', '#8677D9'],
          }}
        />
        <PieChartBox
          title={'Your Ideal Portfolio'}
          pieLabels={['Fixed Income 85%', 'Equity 15%']}
          pieDataSets={{
            data: [85, 15],
            backgroundColor: ['#7AB497', '#FFA463'],
          }}
        />
      </div>
      <Title>InputField</Title>

      <CenteredDiv>
        <InputField
          tipChildren={
            <div>
              <B_15_WHITE>Password</B_15_WHITE>
              <R_12_WHITE>
                Must contain letter and numbers (special characters optional).
              </R_12_WHITE>
              <R_12_WHITE>Length between 6 to 15 characters.</R_12_WHITE>
            </div>
          }
          notValid={true}
          errorMessage={{
            testId: 'testId',
            errorText: 'The Password is incorrect',
            subText: 'Please try again.',
          }}
          type="text"
          clearClickHandler={() => alert('clear clicked')}
          clearIcon={true}
          label="New Password"
          icon={{ name: 'Lock' }}
          value={''}
          handleChange={event => {
            alert({
              inputValue: event.target.value,
            });
          }}
        />
      </CenteredDiv>
      <Title>Primary Button</Title>
      <CenteredDiv>
        <PrimaryButton
          title="Set up now"
          onButtonClick={() => alert('clicked')}
          buttonColor={{ top: '#F6F6F3', bottom: '#EAE9E3' }}
          titleColor="#000000"
          icon={{ name: 'Settings', color: '#000000' }}
        />
        <PrimaryButton
          title="Remove device"
          onButtonClick={() => alert('clicked')}
          icon={{ name: 'delete', color: '#ffffff' }}
        />
        <PrimaryButton
          title="Set up now"
          onButtonClick={() => alert('clicked')}
          buttonColor={{ top: '#F6F6F3', bottom: '#EAE9E3' }}
          titleColor="#000000"
        />
        <PrimaryButton
          title="Remove device"
          onButtonClick={() => alert('clicked')}
        />
      </CenteredDiv>
      <Title>HeaderWithIButtons</Title>
      <CenteredDiv>
        <div style={{ width: 620 }}>
          <HeaderWithIButtons
            headerStyle={{
              backgroundColor: 'rgba(196, 196, 196, 0.3)',
            }}
            icon={{ name: 'Amy', color: '#ff2626' }}
            label="Your DuitNow IDs (3/5)"
            tooltipData={{
              testId: '101',
              tipChildren: (
                <div>
                  <B_14_WHITE>Tips</B_14_WHITE>
                  <R_12_WHITE>
                    Accumulation of fund’s market value based on current NAV.
                    Current value is an indicative value and is to be considered
                    as reference only.
                  </R_12_WHITE>
                </div>
              ),
            }}
            buttonLabel={'Add Mobile Number'}
            buttonColor={{ top: '#F6F6F3', bottom: '#EAE9E3' }}
            buttonIcon={{ name: 'Add', color: '#000000', size: 25 }}
            onButtonClick={() => alert('clicked')}
          />
          <br />
          <HeaderWithIButtons
            headerStyle={{
              backgroundColor: 'rgba(196, 196, 196, 0.3)',
            }}
            image={{ src: images.common.Duitnow1 }}
            label="Your DuitNow IDs (3/5)"
            tooltipData={{
              testId: '101',
              tipChildren: (
                <div>
                  <B_14_WHITE>Tips</B_14_WHITE>
                  <R_12_WHITE>
                    Accumulation of fund’s market value based on current NAV.
                    Current value is an indicative value and is to be considered
                    as reference only.
                  </R_12_WHITE>
                </div>
              ),
            }}
            buttonLabel={'Add Mobile Number'}
            buttonColor={{ top: '#F6F6F3', bottom: '#EAE9E3' }}
            buttonIcon={{ name: 'Add', color: '#000000', size: 25 }}
            onButtonClick={() => alert('clicked')}
          />
        </div>
      </CenteredDiv>
      <Title>TextWithLink</Title>
      <CenteredDiv>
        <TextWithLink
          label="I agree to the"
          textWithLink="Terms and conditions"
          onClick={() => alert('Hello')}
        />
      </CenteredDiv>
      <Title>SearchBar/Filter (updated for sections)</Title>
      <CenteredDiv
        style={{
          backgroundColor: '#f5f5f5',
          width: '600px',
          marginLeft: '32%',
        }}
      >
        <SearchBar
          clearClickHandler={() => alert('clear clicked')}
          searchIconClickHandler={() => alert('Search Icon clicked')}
          placeholder={'Search'}
          value={inputValue}
          handleChange={event => {
            setInputValue(event.target.value);
          }}
          autoFocus={false}
          showFilter={true}
          sectionFilter={true}
          sectionFilterOptions={[
            {
              sectionTitle: 'Transaction Channel',
              data: [
                {
                  label: 'AmOnline Transaction',
                  value: 'AmOnline Transaction',
                  selected: true,
                },
                {
                  label: 'Branch Transaction',
                  value: 'Branch Transaction',
                  selected: false,
                },
                {
                  label: 'All Transaction',
                  value: 'All Transaction',
                  selected: false,
                },
              ],
            },
            {
              sectionTitle: 'Period',
              data: [
                {
                  label: 'Last 30 days',
                  value: 'Last 30 days',
                  selected: true,
                },
                {
                  label: 'Last 60 days',
                  value: 'Last 60 days',
                  selected: false,
                },
                {
                  label: 'Last 90 days',
                  value: 'Last 90 days',
                  selected: false,
                },
                {
                  label: 'Last 1 year',
                  value: 'Last 1 year',
                  selected: false,
                },
              ],
            },
            {
              sectionTitle: 'Transaction Type',
              data: [
                {
                  label: 'All',
                  value: 'All',
                  selected: false,
                },
                {
                  label: 'Buy Fund',
                  value: 'Buy Fund',
                  selected: true,
                },
                {
                  label: 'Redemption',
                  value: 'Redemption',
                  selected: true,
                },
                {
                  label: 'Dividend',
                  value: 'Dividend',
                  selected: false,
                },
              ],
            },
          ]}
          onFilterOptionClick={obj => alert(JSON.stringify(obj))}
          selectedFilters={[
            {
              label: 'Successful',
              value: 'Successful',
              closeIconClickHandler: () => alert('clear Successful'),
            },
            {
              label: 'Unsuccessful',
              value: 'Unsuccessful',
              closeIconClickHandler: () => alert('clear Unsuccessful'),
            },
          ]}
        />
      </CenteredDiv>
      <Title>Header With Icons</Title>
      <CenteredDiv>
        <div style={{ width: 620 }}>
          <HeaderWithIcons
            headerStyle={{
              backgroundColor: 'rgba(196, 196, 196, 0.3)',
            }}
            label={'DuitNow QR'}
            image={{ src: images.common.Duitnow1 }}
            onIconClick={() => alert('clicked')}
          />
          <br />
          <HeaderWithIcons
            headerStyle={{
              backgroundColor: 'rgba(196, 196, 196, 0.3)',
            }}
            label={'DuitNow QR'}
            labelStyle={{ fontWeight: 'normal' }}
            leftIcon={{ name: 'Amy', color: '#ff2626' }}
            onIconClick={() => alert('clicked')}
          />
        </div>
      </CenteredDiv>
      <Title>Simple Header</Title>
      <CenteredDiv>
        <div style={{ width: 620 }}>
          <SimpleHeader
            label="Change Default Account"
            headerStyle={{
              backgroundColor: 'rgba(196, 196, 196, 0.3)',
            }}
          />
        </div>
      </CenteredDiv>
      <Title>Selection Tiles</Title>
      <div style={{ paddingLeft: '2rem' }}>
        <SelectionTile
          testId={'testId'}
          onTileClick={(item, index) => {
            setSTileNum(index);
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={sTileNum}
          list={[
            {
              accountTitle: 'Saving Account A',
              accountNumber: 'RM 2,000.00',
            },
            {
              accountTitle: 'Ambank AmMoneyLine AmMoneyLine',
              accountNumber: 'RM 2,000.00',
            },
            {
              accountTitle: 'Ambank BonusLink Visa',
              accountNumber: 'RM 2,000.00',
            },
            {
              accountTitle: 'Saving Account B',
              accountNumber: 'RM 2,000.00',
            },
          ]}
        />

        <SelectionTile
          onTileClick={(item, index) => {
            setSTileNum1(index);
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={sTileNum1}
          list={[
            {
              avatar: {
                name: 'Myself Adam Constantine',
                src:
                  'https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80',
              },
            },
            {
              avatar: {
                name: 'Christina Azalea Rossie',
                initials: 'CA',
                initialsBg: '#f1f1f1',
              },
            },
            {
              children: <img src={images.common.sampleLogo} width={150} />,
            },

            {
              avatar: {
                name: 'Kurniawan Suriawati',
                initials: 'KS',
              },
            },
          ]}
        />
        <SelectionTile
          onTileClick={(item, index) => {
            setSTileNum2(index);
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={sTileNum2}
          list={[
            {
              accountTitle: 'Saving Account A',
              accountNumber: 'RM 2,000.00',
              amount: 'RM 10,301.50',
            },
            {
              accountTitle: 'Ambank AmMoneyLine AmMoneyLine',
              accountNumber: 'RM 2,000.00',
              amount: ' RM 11,555.00',
            },
            {
              accountTitle: 'Ambank BonusLink Visa',
              accountNumber: 'RM 2,000.00',
              amount: ' RM 55,555.00',
            },
            {
              accountTitle: 'Saving Account B',
              accountNumber: 'RM 2,000.00',
              amount: ' RM 33,555.50',
            },
          ]}
        />
        <SelectionTile
          centered={true}
          onTileClick={(item, index) => {
            setSTileNum3(index);
            alert(`${item.accountTitle} with indexOf ${index} clicked`);
          }}
          selected={sTileNum3}
          list={[
            {
              centeredText: 'Lost',
            },
            {
              centeredText: 'Stolen',
            },
            {
              centeredText: 'Suspicious Activity',
            },
          ]}
        />
      </div>
      <Title>Sticky Footer</Title>
      <CenteredDiv>
        <PrimaryButton
          title={'open Sticky Footer'}
          onButtonClick={() => {
            setStickyFooter(!stickyFooter);
          }}
        />
      </CenteredDiv>
      <StickyFooter
        isOpen={stickyFooter}
        label="Hide Card"
        buttonTitle="Yes, Disable"
        onButtonClick={() => {
          setStickyFooter(!stickyFooter);
        }}
        iconText="Disable online purchases for AmBank Debit Card?"
      />
      <Title>Text With Details</Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TextWithDetails
          title="Insurance"
          titleStyle={{ fontSize: '1.5rem' }}
          content={['Bill Account No.: 51T0409A0690279989']}
          contentStyle={{ fontSize: '0.9375rem' }}
        />

        <TextWithDetails
          title="Indah"
          content={[
            'Bill Account No.: 51T0409A0690279989',
            'Ref-1: 65432145432',
          ]}
        />
      </div>
      <Title>ArrayCheckbox</Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ArrayCheckBox
          data={checkBoxData}
          title={`Jompay (${checkBoxData.length})`}
          testId="testId"
        />
      </div>
      <Title>Label Tool Tip</Title>
      <div style={{ padding: '0 25%' }}>
        <LabelToolTip
          label="Portfolio Comparison"
          tooltipData={{
            testId: '101',
            tipChildren: (
              <div>
                <B_14_WHITE>Tips</B_14_WHITE>
                <R_12_WHITE>
                  Accumulation of fund’s market value based on current NAV.
                  Current value is an indicative value and is to be considered
                  as reference only.
                </R_12_WHITE>
              </div>
            ),
          }}
        />
        <br />
        <LabelToolTip
          spaceBetween={true}
          label="Select your proffered account to send and received money"
          labelStyle={{ color: '#444444', fontWeight: 400 }}
          tooltipData={{
            testId: '101',
            tipChildren: (
              <div>
                <B_13_ORANGE_463>Try one</B_13_ORANGE_463>
                <R_12_WHITE>test</R_12_WHITE>
              </div>
            ),
          }}
        />
      </div>
      <Title>
        PayBillList using (FormContainer and List component)and Line
      </Title>
      <div
        style={{
          margin: '0 auto',
          padding: 4,
          width: '50%',
        }}
      >
        <FormContainer
          children={
            <List
              header={{
                icon: {
                  name: 'LOGO',
                  color: '#ff2626',
                  iconText: 'Review & Confirm',
                },
              }}
              list={[
                {
                  leftLabel: 'To',
                  rightLabel: 'Saving Account A',
                  approved: true,
                  details: ['8881019596535 | AmBank'],
                  amount: {
                    content: 'Dynamic',
                    styleContent: {},
                    value: '600RM',
                    styleValue: {},
                  },
                },

                {
                  leftLabel: 'Date',
                  rightLabel: 'Transfer Now',
                  details: ['Today, 5 January 2019'],
                },

                {
                  leftLabel: 'From',
                  rightLabel: 'Savings Account',
                  details: ['2998202013', 'Available Balance: RM 10,301.50'],
                  status: {
                    content: 'UNSUCCESSFUL',
                    color: 'red',
                  },
                },
              ]}
            />
          }
        />
      </div>
      <Title>PaymentBox (Using FormContainer component)</Title>
      <div
        style={{
          margin: '0 auto',
          padding: 4,
          width: '50%',
        }}
      >
        <br />
        <FormContainer
          label="Biller 1 of 3"
          rightLabel={{ label: 'Remove', onClick: () => alert('asd') }}
          children={
            <div style={{ padding: '2rem' }}>
              <TextWithDetails
                title="Insurance"
                content={['Ref No.: 123456']}
              />
            </div>
          }
        />

        <br />
      </div>
      <Title>TextWithIcon (using LabeledIcon component)</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <LabeledIcon
          leftLabel="Powered by"
          leftLabelStyle={{ fontWeight: 700 }}
          imageIcon={{ src: images.common.JomPay1, size: 40 }}
        />
      </div>
      <Title>W2W List using (FormContainer and List component)and Line</Title>
      <div
        style={{
          margin: '0 auto',
          padding: 4,
          width: '50%',
        }}
      >
        <FormContainer
          children={
            <List
              header={{
                icon: {
                  name: 'LOGO',
                  color: '#ff2626',
                  iconText: 'Review & Confirm',
                },
                image: {
                  name: images.common.amyIcon,
                  alt: 'logo',
                  style: { paddingLeft: '40px' },
                },
              }}
              list={[
                {
                  leftLabel: 'To',
                  rightLabel: 'Saving Account A',
                  approved: true,
                  details: ['8881019596535 | AmBank'],
                  amount: {
                    content: 'amount',
                    value: '500RM',
                  },
                },
                {
                  leftLabel: 'From',
                  rightLabel: 'Savings Account',
                  details: ['2998202013', 'Available Balance: RM 10,301.50'],
                  bottomText: {
                    // provide color props
                    content: 'Change Account',
                    onClick: () => alert('Change account'),
                    style: { backgroundColor: 'blue', color: 'red' },
                  },
                },
              ]}
            />
          }
        />
      </div>
      <Title>
        W2W ModalList using (StatusFormContainer and List component)and Line
      </Title>
      <div
        style={{
          backgroundColor: '#EEEEEE',
          paddingTop: 100,
        }}
      >
        <StatusFormContainer
          statusIcon={{
            icon: 'Fail',
            iconColor: { top: '#FD8585', bottom: '#FF2222' },
            outerIconColor: '#FFEBEE',
          }}
          children={
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '2rem',
              }}
            >
              <B_24_BLACK style={{ textAlign: 'center' }}>
                Transfer Unsuccessful
              </B_24_BLACK>
              <br />
              <p style={{ textAlign: 'center' }}>
                Your payment of RM 20.50 to Revenue Harvest Sdn. Bhd. is
                unsuccessful
              </p>
              <p style={{ textAlign: 'center' }}>
                Unable to perform this transaction. Please call our Contact
                Centre for assistance.
              </p>
              <List
                itemContainerStyle={{ padding: 0 }}
                list={[
                  {
                    leftLabel: 'To',
                    rightLabel: 'Saving Account A',
                    details: ['8881019596535 | AmBank'],
                  },
                  {
                    leftLabel: 'Amount',
                    rightLabel: 'RM 500.00',
                    details: ['Fees & Charges: RM 0.00'],
                  },
                  {
                    leftLabel: 'Date',
                    rightLabel: 'Transfer Now',
                    details: ['Today, 5 January 2019'],
                  },
                  {
                    leftLabel: 'Reference',
                    rightLabel: 'House Rental',
                  },
                  {
                    leftLabel: 'From',
                    rightLabel: 'Savings Account',
                    details: ['2998202013', 'Available Balance: RM 10,301.50'],
                  },
                ]}
              />
            </div>
          }
        />
      </div>
      <Title>Message (using CenterMessage component)</Title>
      <div
        style={{
          height: 500,
        }}
      >
        <CenterMessage // show props , positioning props
          show={true}
          style={{ padding: '80px' }}
          title="You have been logged out"
          subtitle="Thank you for banking with AmOnline Thank you for banking with AmOnline Thank you for banking with AmOnline Thank you for banking with AmOnline Thank you for banking with AmOnlineThank you for banking with AmOnlineThank you for banking with AmOnlineThank you for banking with AmOnlineThank you for banking with AmOnline Thank you for banking with AmOnline Thank you for banking with AmOnline "
        />
      </div>
      <Title>SettingModalCenter</Title>
      <PrimaryButton
        title="Open Settings Modal"
        onButtonClick={() => setSettingsModalOpen(true)}
      />
      <SettingModalCenter // give CV  close functionality
        testId={'testId'}
        modalIsOpen={settingsModalOpen}
        onRequestClose={() => alert('close')}
        modalChildren={
          <StatusFormContainer
            statusIcon={{
              iconColor: { top: '#DCEAEA', bottom: '#7FA2A2' },
              image: {
                src: images.common.amyIcon,
                alt: 'logo',
              },
              outerIconColor: '#EAF4F4',
            }}
            children={
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '0rem 2rem',
                  marginTop: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '1rem',
                  }}
                >
                  <TextWithDetails
                    title="Forgotten your username and password?"
                    content={[
                      'If you have forgotten your username and/or password, you can change them in AmOnline',
                    ]}
                    contentStyle={{ marginBottom: '1rem' }}
                  />
                  <TextWithDetails
                    title="Need more assistance?"
                    direction="row"
                    content={["We're here to help. Get in touch with us"]}
                    contentStyle={{ marginBottom: '1rem' }}
                  />
                  <div style={{ marginBottom: '1rem' }}>
                    <LabeledIcon
                      rightLabel="+603 2178 8888"
                      rightLabelStyle={{
                        fontWeight: 700,
                        fontSize: '0.93rem',
                      }}
                      icon={{
                        name: 'Call',
                        color: '#FF2626',
                        size: 28,
                      }}
                    />
                  </div>
                  <LabeledIcon
                    rightLabel="customercare@ambankgroup.com"
                    rightLabelStyle={{ fontWeight: 700, fontSize: '0.93rem' }}
                    icon={{
                      name: 'Inbox',
                      color: '#FF2626',
                      size: 28,
                    }}
                  />
                </div>
                <div style={{ marginTop: '1rem', marginBottom: '3rem' }}>
                  <PrimaryButton
                    title="Close"
                    onButtonClick={() => {
                      setSettingsModalOpen(false);
                    }}
                  />
                </div>
              </div>
            }
          />
        }
      />

      <Title>ProfilePic</Title>
      <CenteredDiv
        style={{
          margin: '5rem',
        }}
      >
        <AmProfilePic
          testId={'testId'}
          profilePicImage={LocalImages.common.profilePic}
          ProfilePicBgColor={'#2694EB'}
          editIcon={<Icon icon={'Right1'} size={20} color={'#000000'} />}
          onEditClickHandler={() => alert('link clicked')}
          fullName={'Adam Faruk'}
        ></AmProfilePic>
      </CenteredDiv>

      <Title>ProfileDetail</Title>
      <CenteredDiv style={{ backgroundColor: 'white', padding: 50 }}>
        <AmProfileDetail
          testId={'testId'}
          data={[
            {
              profile_data: {
                title: 'Full Name',
                showIcon: false,
                subtitle: [
                  {
                    content: 'Adam Jake',
                  },
                  {
                    content: 'aslam Furich',
                  },
                ],
              },
            },
            {
              profile_data: {
                title: 'Nickname',
                showIcon: true,
                subtitle: [
                  {
                    content: 'Adam_1234',
                  },
                ],
              },
            },
            {
              profile_data: {
                title: 'Mobile Number',
                showIcon: false,
                subtitle: [
                  {
                    content: '******897',
                  },
                ],
              },
            },
            {
              profile_data: {
                title: 'Mailing Address',
                showIcon: false,
                subtitle: [
                  {
                    content:
                      '41, Jalan PJU 1A/29A Ara Damansara,Kundanahalli,Banagalore,43701 Petaling Jaya,Selangor,Malaysia',
                  },
                ],
              },
            },
            {
              profile_data: {
                title: 'Email',
                showIcon: true,
                subtitle: [
                  {
                    content: '*******5678@gmail.com',
                  },
                ],
              },
            },
          ]}
          value={profileInputValue}
          handleChange={(e: any) => {
            setProfileInputValue(e.target.value);
            setTacClear(true);
            setButtonColor({ top: '#FF0D0D', bottom: '#FD8585' });
          }}
          clearIcon={profileInputValue === '' ? tacClear : true}
          clearClickHandler={() => {
            setProfileInputValue('');
            setTacClear(false);
            setButtonColor({ top: '#BDBDBD', bottom: '#BDBDBD' });
          }}
          errorMessage={{
            testId: 'testId',
            errorText: 'The Input Field is wrong',
            subText: 'Please try again.',
          }}
          label=""
          icon={{ name: 'Lock' }}
          onButtonClick={() => {
            alert('Button Clicked');
          }}
          buttonTitle="Continue"
          buttonTitleColor="#ffffff"
          buttonColor={buttonColor}
        />
      </CenteredDiv>

      <Title>ProfileSetting</Title>
      <CenteredDiv
        style={{
          backgroundColor: 'white',
          padding: 50,
          alignItems: 'center',
        }}
      >
        <CenteredDiv
          style={{
            flexDirection: 'column',
            padding: '24px 24px  51px 24px',
            background: ' #F7F7F7',
            borderRadius: '16px',
          }}
        >
          <div>
            <AmProfilePic
              testId={'testId'}
              profilePicImage={LocalImages.common.profilePic}
              ProfilePicBgColor={'#2694EB'}
              editIcon={<Icon icon={'Right1'} size={20} color={'#000000'} />}
              onEditClickHandler={() => alert('link clicked')}
              fullName={'Adam Faruk'}
            ></AmProfilePic>
          </div>
          <div style={{ marginTop: '31px', marginBottom: '4px' }}>
            <B_32_BLACK>Adam_1234</B_32_BLACK>
          </div>
          <div style={{ marginBottom: '41px' }}>
            <R_15_BLACK>Last login on 2 Feb 2020 at 03:06pm</R_15_BLACK>
          </div>
          <AmProfileDetail
            testId={'testId'}
            data={[
              {
                profile_data: {
                  title: 'Full Name',
                  showIcon: false,
                  subtitle: [
                    {
                      content: 'Adam Jake',
                    },
                    {
                      content: 'aslam Furich',
                    },
                  ],
                },
              },
              {
                profile_data: {
                  title: 'Nickname',
                  showIcon: true,
                  subtitle: [
                    {
                      content: 'Adam_1234',
                    },
                  ],
                },
              },
              {
                profile_data: {
                  title: 'Mobile Number',
                  showIcon: false,
                  subtitle: [
                    {
                      content: '******897',
                    },
                  ],
                },
              },
              {
                profile_data: {
                  title: 'Mailing Address',
                  showIcon: false,
                  subtitle: [
                    {
                      content:
                        '41, Jalan PJU 1A/29A Ara Damansara,Kundanahalli,Banagalore,43701 Petaling Jaya,Selangor,Malaysia',
                    },
                  ],
                },
              },
              {
                profile_data: {
                  title: 'Email',
                  showIcon: true,
                  subtitle: [
                    {
                      content: '*******5678@gmail.com',
                    },
                  ],
                },
              },
            ]}
            value={profileInputValue}
            handleChange={(e: any) => {
              setProfileInputValue(e.target.value);
              setTacClear(true);
              setButtonColor({ top: '#FF0D0D', bottom: '#FD8585' });
            }}
            clearIcon={profileInputValue === '' ? tacClear : true}
            clearClickHandler={() => {
              setProfileInputValue('');
              setTacClear(false);
              setButtonColor({ top: '#BDBDBD', bottom: '#BDBDBD' });
            }}
            errorMessage={{
              testId: 'testId',
              errorText: 'The Input Field is wrong',
              subText: 'Please try again.',
            }}
            label=""
            icon={{ name: 'Lock' }}
            onButtonClick={() => {
              alert('Button Clicked');
            }}
            buttonTitle="Continue"
            buttonTitleColor="#ffffff"
            buttonColor={buttonColor}
          />
          <div style={{ padding: 24, maxWidth: 439, width: '100%' }}>
            <SB_13_BLACK>
              Note: If you wish to change your <strong>mobile number</strong>
              and/or <strong>mailing address.</strong> please visit your nearest
              branch.
            </SB_13_BLACK>
          </div>
          <div
            style={{
              padding: '0px 24px 0px 24px',
              maxWidth: 439,
              width: '100%',
            }}
          >
            <SB_13_BLACK>
              Your <strong>Profile picture</strong>should not exceed the 5 MB
              file limit.
            </SB_13_BLACK>
          </div>
        </CenteredDiv>
      </CenteredDiv>
    </div>
  );
};

export default Sprint3;
