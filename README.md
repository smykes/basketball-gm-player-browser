# basketball-gm-player-browser
Utility for viewing [Basketball GM](https://basketball-gm.com/) JSON roster files.

###Technical Stuff###
This is starting to get usable.  You can go to http://dev.secondrunnerup.com/player and choose a file to browse through, you should be able to use it with your own exported JSON files now.

###Working Queries###
Currently you can search by name (using the first name first as the JSON files only have a name field and not a fName lName field).

There are some other things you can search by you can use >, <, = for inequalties:

    :3pt > n //returns players with a three point rating higher than n
    :pas > n //returns players with a passer rating higher than n
    :reb > n //returns players with a rebound rating higher than n
    :tal > n //returns players with a height rating higher than n
    :str > n //returns players with a strength rating higher than n
    :spd > n //returns players with a speed rating higher than n
    :jmp > n //returns players with a jump rating higher than n
    :end > n //returns players with a endurance rating higher than n
    :ins > n //returns players with a inside rating higher than n
    :dnk > n //returns players with a dunk rating higher than n
    :fth > n //returns players with a free throw rating higher than n
    :fgo > n //returns players with a field goal rating higher than n
    :blk > n //returns players with a block rating higher than n
    :drb > n //returns players with a dribble rating higher than n
    :pot > n //returns players with a potential rating higher than n

where 'n' is a whole number.

###Todo###
Like everything.

###Annoying Legal Stuff###
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
