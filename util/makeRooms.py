from django.contrib.auth.models import User
from adventure.models import Player, Room
import random

def create(connector, RoomNum, maximum,direction, oppositeDirection):
      count = random.randrange(3)
      first=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
      first.save()
      connector.connectRooms(first, f"{direction}")
      first.connectRooms(connector, f"{oppositeDirection}")
      RoomNum+=1
      print("RoomNum", RoomNum, "maximum", maximum)
      if direction == "n":
            tempDir="e"
            firstDir="w"
            while RoomNum <= maximum:
                  temp=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                  temp.save()
                  first.connectRooms(temp, f"{firstDir}")
                  temp.connectRooms(first, f"{tempDir}")
                  if count==0:
                    RoomNum+=1
                    Room_n=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    Room_n.save()
                    temp.connectRooms(Room_n, "n")
                    Room_n.connectRooms(temp,"s")
                    # RoomNum+=1
                    # Room_e=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_e.save()
                    # temp.connectRooms(Room_e, "e")
                    # Room_e.connectRooms(temp,"w")
                    RoomNum+=1
                    Room_s=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    Room_s.save()
                    temp.connectRooms(Room_s, "s")
                    Room_s.connectRooms(temp,"n")
                    # RoomNum+=1
                    # Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_w.save()
                    # temp.connectRooms(Room_w, "w")
                    # Room_w.connectRooms(temp,"e")
                    count = random.randrange(3)
                  elif count == 1:
                    # RoomNum+=1
                    # Room_e=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_e.save()
                    # temp.connectRooms(Room_e, "e")
                    # Room_e.connectRooms(temp,"w")
                    RoomNum+=1
                    Room_s=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    Room_s.save()
                    temp.connectRooms(Room_s, "n")
                    Room_s.connectRooms(temp,"s")
                    # RoomNum+=1
                    # Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_w.save()
                    # temp.connectRooms(Room_w, "w")
                    # Room_w.connectRooms(temp,"e")
                    count = random.randrange(3)
                  elif count == 2:
                    # RoomNum+=1
                    # Room_s=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_s.save()
                    # temp.connectRooms(Room_s, "s")
                    # Room_s.connectRooms(temp,"n")
                    # RoomNum+=1
                    # Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_w.save()
                    # temp.connectRooms(Room_w, "w")
                    # Room_w.connectRooms(temp,"e")
                  #   count+=1
                  # elif count == 3:
                    # RoomNum+=1
                    # Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_w.save()
                    # temp.connectRooms(Room_w, "w")
                    # Room_w.connectRooms(temp,"e")
                    count = random.randrange(3)
                    # count+=1
                  # elif count == 4:
                  #   count=0
                  first=temp
                  RoomNum+=1
      elif direction=="e":
            tempDir="n"
            firstDir="s"
            while RoomNum <= maximum:
                  temp=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                  temp.save()
                  first.connectRooms(temp, f"{tempDir}")
                  temp.connectRooms(first, f"{firstDir}")
                  if count==0:
                    # RoomNum+=1
                    # Room_n=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_n.save()
                    # temp.connectRooms(Room_n, "n")
                    # Room_n.connectRooms(temp,"s")
                    RoomNum+=1
                    Room_e=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    Room_e.save()
                    temp.connectRooms(Room_e, "e")
                    Room_e.connectRooms(temp,"w")
                    # RoomNum+=1
                    # Room_s=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_s.save()
                    # temp.connectRooms(Room_s, "s")
                    # Room_s.connectRooms(temp,"n")
                    RoomNum+=1
                    Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    Room_w.save()
                    temp.connectRooms(Room_w, "w")
                    Room_w.connectRooms(temp,"e")
                    count = random.randrange(3)
                  elif count == 1:
                    # RoomNum+=1
                    # Room_e=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_e.save()
                    # temp.connectRooms(Room_e, "e")
                    # Room_e.connectRooms(temp,"w")
                    # RoomNum+=1
                    # Room_s=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_s.save()
                    # temp.connectRooms(Room_s, "s")
                    # Room_s.connectRooms(temp,"n")
                    RoomNum+=1
                    Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    Room_w.save()
                    temp.connectRooms(Room_w, "w")
                    Room_w.connectRooms(temp,"e")
                    count = random.randrange(3)
                  elif count == 2:
                    # RoomNum+=1
                    # Room_s=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_s.save()
                    # temp.connectRooms(Room_s, "s")
                    # Room_s.connectRooms(temp,"n")
                    # RoomNum+=1
                    # Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_w.save()
                    # temp.connectRooms(Room_w, "w")
                    # Room_w.connectRooms(temp,"e")
                  #   count+=1
                  # elif count == 3:
                    # RoomNum+=1
                    # Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
                    # Room_w.save()
                    # temp.connectRooms(Room_w, "w")
                    # Room_w.connectRooms(temp,"e")
                    count = random.randrange(3)
                    # count+=1
                  # elif count == 4:
                  #   count=0
                  first=temp
                  RoomNum+=1

def makeRooms(connector1,connector2):
    RoomNum = 6
    maximum=40
    create(connector1,RoomNum, maximum,"n","s")
    RoomNum=40
    maximum=102
    create(connector2, RoomNum, maximum,"e", "w")


