# from django.contrib.auth.models import User
# from adventure.models import Player, Room

# def makeRooms(connector):
#     count = 0
#     RoomNum = 6
#     first=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
#     first.save()
#     connector.connectRooms(first, "e")
#     first.connectRooms(connector, "w")
#     RoomNum+=1
#     while RoomNum < 101:
#       temp=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
#       temp.save()
#       first.connectRooms(temp, "n")
#       temp.connectRooms(first, "s")
#       if count==0:

#         RoomNum+=1
#         Room_e=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
#         Room_e.save()
#         temp.connectRooms(Room_e, "e")
#         Room_e.connectRooms(temp,"w")

#         RoomNum+=1
#         Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
#         Room_w.save()
#         temp.connectRooms(Room_w, "w")
#         Room_w.connectRooms(temp,"e")
#         count+=1
#         first=Room_w
#       elif count == 1:

#         RoomNum+=1
#         Room_w=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
#         Room_w.save()
#         temp.connectRooms(Room_w, "w")
#         Room_w.connectRooms(temp,"e")
#         count+=1
#         first=Room_e
      
#       else count == 2:
#         count = 0
#         first = Room_w

#       RoomNum+=1









from django.contrib.auth.models import User
from adventure.models import Player, Room
def makeRooms(connector):
    count = 0
    RoomNum = 6
    first=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
    first.save()
    connector.connectRooms(first, "e")
    first.connectRooms(connector, "w")
    RoomNum+=1
    while RoomNum < 101:
      temp=Room(title=f"Room {RoomNum}", description=f"This is room {RoomNum}")
      temp.save()
      first.connectRooms(temp, "n")
      temp.connectRooms(first, "s")
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
        count+=1
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
        count+=1
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
        count=0
        # count+=1
      # elif count == 4:
      #   count=0
      first=Room_w
      RoomNum+=1