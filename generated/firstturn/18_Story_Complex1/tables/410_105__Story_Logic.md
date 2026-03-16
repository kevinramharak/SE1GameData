# `105: Story Logic` (`410`)

## Library

| Key | Value |
| --- | --- |
| Library Slot | `18` |
| Name | [Story_Complex1](../) |
| Library ID | `-1` |

## Columns

| Index | Name | Type |
| --- | --- | --- |
| `0` | Complex Story ID | `Text` |
| `1` | 102 | `Text` |
| `2` | 102 | `Text` |
| `3` | 102 | `Text` |

### Data

| Complex Story ID | 102 | 102 | 102 |
| --- | --- | --- | --- |
| 105 | 2 | REVREGREGKEY.aiStoryMode==1; TARGETWAR==1; | REVREGREGKEY.aiStoryMode=3; REVREGREGKEY.aiFriends=0; |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiIntention>=70; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-10; |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiIntention>=50; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-6; |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiIntention>=30; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-3; |
| 105 | 2 | REVREGREGKEY.giftCounter>0 | REVREGREGKEY.giftCounter=REVREGREGKEY.giftCounter-1 |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==5; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-2; |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==4; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-4; |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==3; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-6; |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==2; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-8; |
| 105 | 2 | REVREGREGKEY.aiNegativeDip>0; REVREGREGKEY.aiStoryMode==1; | REVREGREGKEY.aiNegativeDip=REVREGREGKEY.aiNegativeDip-10; |
| 105 | 2 | REVREGREGKEY.aiStoryMode!=2 | REVREGREGKEY.aiTimeFriends=0; |
| 105 | 2 | REVREGREGKEY.aiStoryMode!=1 | REVREGREGKEY.aiTimeAllies=0; |
| 105 | 2 | REVREGREGKEY.aiStoryMode!=4 | REVREGREGKEY.aiBribeSucces=0;REVREGREGKEY.aiBribeFailure=0; |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; REVREGREGKEY.aiIntention<15; TARGETWAR==0; | REVREGREGKEY.aiStoryMode=3 |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; REVREGREGKEY.aiIntention<35; TARGETWAR==0; dth(1,100)<10; | REVREGREGKEY.aiStoryMode=3 |
| 105 | 2 | REVREGREGKEY.aiStoryMode==3; REVREGREGKEY.aiIntention>=80; REVREGREGKEY.aiHatred<5; TARGETWAR==0; | REVREGREGKEY.aiStoryMode=2 |
| 105 | 2 | REVREGREGKEY.aiStoryMode==4; REVREGREGKEY.aiIntention>=60; REVREGREGKEY.aiHatred<5; | REVREGREGKEY.aiStoryMode=3 |
| 105 | 2 | REVREGREGKEY.aiStoryMode==5; REVREGREGKEY.aiIntention>=50; REVREGREGKEY.aiHatred<5; | REVREGREGKEY.aiStoryMode=3 |
| 105 | 2 | REVREGREGKEY.aiHatred>0; REVREGREGKEY.aiLove>0; | TEMP1=min(REVREGREGKEY.aiLove,REVREGREGKEY.aiHatred); REVREGREGKEY.aiHatred=REVREGREGKEY.aiHatred-TEMP1; REVREGREGKEY.aiLove=REVREGREGKEY.aiLove-TEMP1; |
| 105 | 2 | REVREGREGKEY.aiStoryMode==4; REVREGREGKEY.aiHatred>0; | REVREGREGKEY.aiHatred=max(0,REVREGREGKEY.aiHatred-1); |
| 105 | 2 | REVREGREGKEY.aiStoryMode==3; REVREGREGKEY.aiHatred>0; | REVREGREGKEY.aiHatred=max(0,REVREGREGKEY.aiHatred-1); |
| 105 | 2 | REVREGREGKEY.aiStoryMode==1; REVREGREGKEY.aiHatred>0; | REVREGREGKEY.aiHatred=max(0,REVREGREGKEY.aiHatred-4); |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; REVREGREGKEY.aiHatred>0; | REVREGREGKEY.aiHatred=max(0,REVREGREGKEY.aiHatred-2); |
| 105 | 2 | REVREGREGKEY.aiStoryMode==1; | REVREGREGKEY.aiTimeAllies=REVREGREGKEY.aiTimeAllies+1 |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; | REVREGREGKEY.aiTimeFriends=REVREGREGKEY.aiTimeFriends+1 |
| 105 | 2 | REVREGREGKEY.aiLove>0; | REVREGREGKEY.aiLove=REVREGREGKEY.aiLove-max(1,REVREGREGKEY.aiLove/20) |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; STORYMOD.4>500; STORYMOD.6<500; | REVREGREGKEY.aiStoryMode=4; REVREGREGKEY.aiFriends=0; |
| 105 | 2 | REVREGREGKEY.aiStoryMode==1; STORYMOD.4>500; STORYMOD.6>500; | REVREGREGKEY.aiStoryMode=3; REVREGREGKEY.aiFriends=0; |
| 105 | 2 | REVREGREGKEY.aiStoryMode==3; TARGETWAR==1; REVREGREGKEY.aiIntention<=40; | REVREGREGKEY.aiStoryMode=5; REVREGREGKEY.aiFriends=0; |
| 105 | 2 | REVREGREGKEY.aiStoryMode==2; TARGETWAR==1; | REVREGREGKEY.aiStoryMode=3; REVREGREGKEY.aiFriends=0; |
| 105 | 2 | REVREGREGKEY.giftCounter>1; REVREGREGKEY.aiNegativeDip<5; | REVREGREGKEY.giftCounter=REVREGREGKEY.giftCounter-2 |
| 105 | 2 | REVREGREGKEY.lastLookForPeace>0 | REVREGREGKEY.lastLookForPeace=REVREGREGKEY.lastLookForPeace-5; REVREGREGKEY.lastLookForPeace=max(0,REVREGREGKEY.lastLookForPeace); |

