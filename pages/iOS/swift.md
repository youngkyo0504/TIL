---
title: "Swift UI"
full_path: "pages/iOS/swift.md"
---


## Swift UI에서 Color 자동완성하는 법
우선 asset에 색상을 정의해주어야함 그리고 swift 파일을 만들고  다음과 같이 작성 
```swift
import Foundation
import SwiftUI

extension Color {
    static let customGreenLight = Color("ColorGreenLight")
}
```

`Color.customGreenLight` 형태로 자동완성이 가능하다.  

## ReUsable Button 만들기
swift파일을 만든다. view파일 아님

```swift
import Foundation
import SwiftUI

Struct GradientButton: ButtonStyle {
   func makeBody(configuration: Configuration)  -> some View {
      configuration
          .label
          .padding(.vertical)
          .padding(.horizontal, 30)
          .background(
              // configuration이 prop같은 것일듯? 
              configuration.isPressed ? LinearGradient(...) : LinearGradient(...)
     )
  }
}
```  
실제 사용 코드

```
        Button {
          // ACTION: Generate a random number
          
          randomImage()
        } label: {
          Text("Explore More")
            .font(.title2)
            .fontWeight(.heavy)
            .foregroundStyle(
              LinearGradient(
                colors: [
                  .customGreenLight,
                  .customGreenMedium
                ],
                startPoint: .top,
                endPoint: .bottom
              )
            )
            .shadow(color: .black.opacity(0.25), radius: 0.25, x: 1, y: 2)
        }
        .buttonStyle(GradientButton())
     // ~~~~~~~~~~~~~~~~~~
``` 

## 상태관리

```swift
struct CardView: View {
  // MARK: - PROPERTIES
  
  @State private var imageNumber: Int = 1 // 기본값을 넣지 않으면 사용처에서 넣어야함 
  @State private var randomNumber: Int = 1
  @State private var isShowingSheet: Bool = false
  
  // MARK: - FUNCTIONS
  
  func randomImage() {
    print("--- BUTTON WAS PRESSED ---")
    print("Status: Old Image Number = \(imageNumber)")
    
    repeat {
      randomNumber = Int.random(in: 1...5)
      print("Action: Random Number Generated = \(randomNumber)")
    } while randomNumber == imageNumber
    
    imageNumber = randomNumber
    
    print("Result: New Image Number = \(imageNumber)")
    print("--- THE END ---")
    print("\n")
  }
  
  var body: some View {
    // MARK: - CARD
    
    ZStack {
      CustomBackgroundView()
      
      VStack {
        // MARK: - HEADER
        
        VStack(alignment: .leading) {
          HStack {
            Text("Hiking")
            Spacer()
            Button {
              isShowingSheet.toggle()
            } label: {
              CustomButtonView()
            }
          }
          
          Text("Fun and enjoyable outdoor activity for friends and families.")
        } 

        
        // MARK: - MAIN CONTENT
        
        ZStack {
        Button {
          // ACTION: Generate a random number
          randomImage()
        } label: {
      } //: ZSTACK
    } //: CARD
    .frame(width: 320, height: 570)
  }
}

struct CardView_Previews: PreviewProvider {
  static var previews: some View {
    CardView()
  }
}

```

## Animation 
```swift
          Image("image-\(imageNumber)")
            .resizable()
            .scaledToFit()
            .animation(.default, value: imageNumber)
           // imageNumber가 다르면 바로 애니메이션
```


## Overflow hidden하는법 
Zstack { }.mask(Circle()) 이렇게 mask를 추가하면 된다. 


## 고성능 렌더링 
.drawingGroup
고성능 렌더링을 위한 modifier offscreencanvas와 비슷한 것 같음 
 
## BottomSheet 올리기

```swift
Button{
   // 여기서토글
 isShowingSheet.toogle()
}.sheet(isPresented: $isShowingSheet) {
              SettingsView()
                .presentationDragIndicator(.visible)
                .presentationDetents([.medium, .large])
            }

```

## 컴포넌트 인자 Optional하게 주기 
아래와 같이 ? operator와 nil 주기 
```swift
@state var rowContent: String? = nil
```
