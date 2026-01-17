import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";
import { MapPinIcon, MessageSquareIcon, VideoIcon } from "lucide-react";
import { capitialize } from "../lib/utils";

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-200 hover:shadow-lg transition-all duration-300">
      <div className="card-body p-5 space-y-4">
        {/* USER INFO */}
        <div className="flex items-center gap-3">
          <div className="avatar size-16 rounded-full">
            <img src={friend.profilePic} alt={friend.fullName} />
          </div>

          <div>
            <h3 className="font-semibold text-lg">{friend.fullName}</h3>
            {friend.location && (
              <div className="flex items-center text-xs opacity-70 mt-1">
                <MapPinIcon className="size-3 mr-1" />
                {friend.location}
              </div>
            )}
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="flex flex-wrap gap-1.5">
          <span className="badge badge-secondary">
            {getLanguageFlag(friend.nativeLanguage)}
            Native: {capitialize(friend.nativeLanguage)}
          </span>
          <span className="badge badge-outline">
            {getLanguageFlag(friend.learningLanguage)}
            Learning: {capitialize(friend.learningLanguage)}
          </span>
        </div>

        {/* BIO */}
        {friend.bio && <p className="text-sm opacity-70 line-clamp-2">{friend.bio}</p>}

        {/* ACTIONS */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Link to={`/chat/${friend._id}`} className="btn btn-primary">
            <MessageSquareIcon className="size-4 mr-2" />
            Message
          </Link>
          <Link to={`/call/${friend._id}`} className="btn btn-outline">
            <VideoIcon className="size-4 mr-2" />
            Call
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FriendCard;

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  }
  return null;
}
