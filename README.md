## Tech Stack

- React Native v0.65
- React Navigation v6
  - Stack
  - Bottom Tab
- Styled Components

## Screens

- SplashScreen

### Public

- Login
- Signup

### Private

- Home
- My Profile

## Navigations

- RootStackNavigator : 가장 뿌리가 되는 스택
- AuthStackNavigator : Login, Signup 등 Authentication과 관련된 화면들, 현재는 따로 Navigator에 분리되어 있지 않고 Root Stack 안에 들어 있음.
- BottomTabNavigator : 메인 바텀 탭
- HomeStackNavigator : 왼쪽 탭 스택, 자유롭게 변경
- MyProfileStackNavigator : 오른쪽 탭 스택, 자유롭게 변경
