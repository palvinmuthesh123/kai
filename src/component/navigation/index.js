import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActivityIndicator } from 'react-native';
import { navigationRef } from '../../utils/navigation';
import { ActionCreators } from '../../redux/action';
import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import OnboardScreen from '../../screens/LoginScreen/OnboardScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen'
import ResetPassword from '../../screens/LoginScreen/ResetPassword';
import CreateAccount1 from '../../screens/RegisterScreen/CreateAccount1';
import CreateAccount2 from '../../screens/RegisterScreen/CreateAccount2';
import CreateAccount3 from '../../screens/RegisterScreen/CreateAccount3';
import CreateAccount4 from '../../screens/RegisterScreen/CreateAccount4';
import DashBoardScreen from '../../screens/DashboardScreen/DashBoardScreen';
import HomeScreen from '../../screens/DashboardScreen/HomeScreen';
import SearchScreen from '../../screens/DashboardScreen/SearchScreen';
import ExpertDashboardScreen from '../../screens/ExpertDashboard/ExpertDashboardScreen';
import FilterScreen from '../../screens/ExpertDashboard/FilterScreen';
import RecruitmentScreen from '../../screens/ExpertDashboard/RecruitmentScreen';
import RecruiterProfile from '../../screens/ExpertDashboard/RecruiterProfile';
import MessageScreen from '../../screens/ExpertDashboard/MessageScreen';
import GroupMessage from '../../screens/ExpertDashboard/GroupMessage';
import CreatePost from '../../screens/ExpertDashboard/CreatePost';
import AddStory from '../../screens/ExpertDashboard/AddStory';
import SearchPeople from '../../screens/ExpertDashboard/SearchPeople';
import NewMessage from '../../screens/ExpertDashboard/NewMessage';
import ProfileScreen from '../../screens/DashboardScreen/ProfileScreen';
import EditProfile from '../../screens/DashboardScreen/EditProfile';
import SettingScreen from '../../screens/BottomHeader/SettingScreen';
import ChangePassword from '../../screens/BottomHeader/ChangePassword';
import NotificationScreen from '../../screens/ExpertDashboard/NotificationScreen';
import AthleteTabbar from '../../screens/AthleteScreen/AthleteTabbar';//
import JobSearch from '../../screens/JobPortal/JobSearch';
import JobDetails from '../../screens/JobPortal/JobDetails';
import JobFilter from '../../screens/JobPortal/JobFilter';
import CampaignScreen from '../../screens/JobPortal/CampaignScreen';
import AddCampaign from '../../screens/JobPortal/AddCampaign';
import MyRequestJobs from '../../screens/JobPortal/MyRequestJobs';//
import SavedJobScreen from '../../screens/JobPortal/SavedJobScreen';//
import MyCampaigns from '../../screens/JobPortal/MyCampaigns';///
import SavedCampaigns from '../../screens/JobPortal/SavedCampaigns';//
import MyJobTabbar from '../../screens/JobPortal/MyJobTabbar';//
import MainModal from '../../component/Modal/MainModal' //MainModal
import AthleteOpening from '../../screens/AthleteScreen/AthleteOpening';
import AthleteFilter from '../../screens/AthleteScreen/AthleteFilter';
import PostRecruitment from '../../screens/AthleteScreen/PostRecruitment';///
import AthleteProfile from '../../screens/AthleteScreen/AthleteProfile';
import PlayingExperience from '../../screens/AthleteScreen/PlayingExperience';
import CoachAchievement from '../../screens/AthleteScreen/CoachAchievement';
import CoachEducation from '../../screens/AthleteScreen/CoachEducation';
import CoachExperience from '../../screens/AthleteScreen/CoachExperience';
import CoachProfile from '../../screens/AthleteScreen/CoachProfile';
import SportsHomeScreen from '../../screens/SportsScreen/SportsHomeScreen';
import SportsDetails from '../../screens/SportsScreen/SportsDetails';
import SportsIntroduction from '../../screens/SportsScreen/SportsIntroduction';
import AboutSports from '../../screens/SportsScreen/AboutSports';
import ClinicHomeScreen from '../../screens/KlinicScreen/ClinicHomeScreen';
import DoctorDetails from '../../screens/KlinicScreen/DoctorDetails';
import NewAppointment from '../../screens/KlinicScreen/NewAppointment';
import PatientDetail from '../../screens/KlinicScreen/PatientDetail';
import BookingDetail from '../../screens/KlinicScreen/BookingDetail';
import BookingApoointment from '../../screens/KlinicScreen/BookingApoointment';
import AppointmentTabbar from '../../screens/KlinicScreen/AppointmentTabbar';
import UpcomingAppointments from '../../screens/KlinicScreen/UpcomingAppointments';
import ChatList from '../../screens/KlinicScreen/ChatList';
import DrChatScreen from '../../screens/ExpertDashboard/DrChatScreen';
import CampaignDetail from '../../screens/JobPortal/CampaignDetail';
import AllSports from '../../screens/SportsScreen/AllSports';
import SavedVideos from '../../screens/SportsScreen/SavedVideos';
import ClinicFilter from '../../screens/KlinicScreen/ClinicFilter';
import DoctorList from '../../screens/KlinicScreen/DoctorList';
import TopSpecialist from '../../screens/KlinicScreen/TopSpecialist';

 const Stack = createStackNavigator();

const AppStack = props => {
  return (
    <Stack.Navigator
      // initialRouteName={'CampaignScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="CreateAccount1" component={CreateAccount1} />
      <Stack.Screen name="CreateAccount2" component={CreateAccount2} />
      <Stack.Screen name="CreateAccount3" component={CreateAccount3} />
      <Stack.Screen name="CreateAccount4" component={CreateAccount4} />
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ExpertDashboardScreen" component={ExpertDashboardScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="RecruitmentScreen" component={RecruitmentScreen} />
      <Stack.Screen name="RecruiterProfile" component={RecruiterProfile} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="GroupMessage" component={GroupMessage} />
      <Stack.Screen name="CreatePost" component={CreatePost} />
      <Stack.Screen name="AddStory" component={AddStory} />
      <Stack.Screen name="SearchPeople" component={SearchPeople} />
      <Stack.Screen name="NewMessage" component={NewMessage} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="AthleteTabbar" component={AthleteTabbar} />
      <Stack.Screen name="JobSearch" component={JobSearch} />
      <Stack.Screen name="JobDetails" component={JobDetails} />
      <Stack.Screen name="JobFilter" component={JobFilter} />
      <Stack.Screen name="CampaignScreen" component={CampaignScreen} />
      <Stack.Screen name="AddCampaign" component={AddCampaign} />
      <Stack.Screen name="MyRequestJobs" component={MyRequestJobs} />
      <Stack.Screen name="SavedJobScreen" component={SavedJobScreen} />
      <Stack.Screen name="MyCampaigns" component={MyCampaigns} />
      <Stack.Screen name="SavedCampaigns" component={SavedCampaigns} />
      <Stack.Screen name="MyJobTabbar" component={MyJobTabbar} />
      <Stack.Screen name="MainModal" component={MainModal} />
      <Stack.Screen name="AthleteOpening" component={AthleteOpening} />
      <Stack.Screen name="AthleteFilter" component={AthleteFilter} />
      <Stack.Screen name="PostRecruitment" component={PostRecruitment} />
      <Stack.Screen name="AthleteProfile" component={AthleteProfile} />
      <Stack.Screen name="PlayingExperience" component={PlayingExperience} />
      <Stack.Screen name="CoachAchievement" component={CoachAchievement} />
      <Stack.Screen name="CoachEducation" component={CoachEducation} />
      <Stack.Screen name="CoachExperience" component={CoachExperience} />
      <Stack.Screen name="CoachProfile" component={CoachProfile} />
      <Stack.Screen name="SportsHomeScreen" component={SportsHomeScreen} />
      <Stack.Screen name="SportsDetails" component={SportsDetails} />
      <Stack.Screen name="SportsIntroduction" component={SportsIntroduction} />
      <Stack.Screen name="AboutSports" component={AboutSports} />
      <Stack.Screen name="ClinicHomeScreen" component={ClinicHomeScreen} />
      <Stack.Screen name="DoctorDetails" component={DoctorDetails} />
      <Stack.Screen name="NewAppointment" component={NewAppointment} />
      <Stack.Screen name="PatientDetail" component={PatientDetail} />
      <Stack.Screen name="BookingDetail" component={BookingDetail} />
      <Stack.Screen name="BookingApoointment" component={BookingApoointment} />
      <Stack.Screen name="AppointmentTabbar" component={AppointmentTabbar} />
      <Stack.Screen name="UpcomingAppointments" component={UpcomingAppointments} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="DrChatScreen" component={DrChatScreen} />
      <Stack.Screen name="CampaignDetail" component={CampaignDetail} />
      <Stack.Screen name="AllSports" component={AllSports} />
      <Stack.Screen name="SavedVideos" component={SavedVideos} />
      <Stack.Screen name="ClinicFilter" component={ClinicFilter} />
      <Stack.Screen name="DoctorList" component={DoctorList} />
      <Stack.Screen name="TopSpecialist" component={TopSpecialist} />
      
    </Stack.Navigator>
  );
};


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isApiCall: true,
    };
  }

  render() {
    setTimeout(
      () =>
        this.setState({
          isApiCall: false,
        }),
      1300,
    );

    if (this.state.isApiCall) {
      return (
        <ActivityIndicator
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
          }}
          color={'red'}
          size="large"
        />
      );
    } else {
      return (
        <NavigationContainer ref={navigationRef}>
          <AppStack />
        </NavigationContainer>
      );
    }
  }
}

const mapStateToProps = ({ authReducer }) => {
  if (authReducer) {
    return {
      authReducer: authReducer,
    };
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
