import pyttsx3
import speech_recognition
from datetime import date
from datetime import datetime

print("___________________")
robot_ear = speech_recognition.Recognizer()
robot_mouth = pyttsx3.init()
robot_brain = ""

while True:
    with speech_recognition.Microphone() as mic:
        print("Robot: I am listening!")
        audio = robot_ear.listen(mic)

    print("Robot: ......")

    try:
        you = robot_ear.recognize_google(audio)
    except:
        you = ""

    print("Minh Thanh: " + you)
    
    if you == "":
        robot_brain = "I can't hear you, try again!"
    elif "hello" in you:
        robot_brain = "Hello Minh Thanh!"
    elif "today" in you:
        today = date.today()
        robot_brain = today.strftime("%B %d, %Y")
    elif "time" in you:
        now = datetime.now()
        robot_brain = now.strftime("%H Hours %M minutes %S seconds")
    elif "president of America" in you:
        robot_brain = "Donald Trump"
    elif "my mother" in you:
        robot_brain = "Your mother is Le Thi My Nhung"
    elif "my father" in you:
        robot_brain = "Your father is Tran Van Luu"
    elif "bye" in you:
        robot_brain = "Bye Minh Thanh!"
        print("Robot: " + robot_brain)
        voice = robot_mouth.getProperty('voices')
        robot_mouth.setProperty('voice', voice[1].id)
        robot_mouth.say(robot_brain)
        robot_mouth.runAndWait()
        break
    else:
        robot_brain = "I'm fine thank you and you?"
    print("Robot: " + robot_brain)

    voice = robot_mouth.getProperty('voices')
    robot_mouth.setProperty('voice', voice[1].id)
    robot_mouth.say(robot_brain)
    robot_mouth.runAndWait()