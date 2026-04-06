import React, { useState, useCallback, useMemo } from "react";

const Voting = () => {
  const [languages, setLanguages] = useState([
    { name: "PHP", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "React", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const [newLang, setNewLang] = useState("");

  const totalVotes = useMemo(
    () => languages.reduce((sum, l) => sum + l.votes, 0),
    [languages]
  );

  // Increment vote
  const incrementVote = useCallback((index) => {
    setLanguages((prev) =>
      prev.map((lang, i) =>
        i === index ? { ...lang, votes: lang.votes + 1 } : lang
      )
    );
  }, []);

  // Add new language
  const addLanguage = () => {
    if (!newLang.trim()) return;

    setLanguages((prev) => [
      ...prev,
      { name: newLang.trim(), votes: 0 },
    ]);

    setNewLang("");
  };

  // Compute winner
  const winner = useMemo(() => {
    const maxVotes = Math.max(...languages.map((l) => l.votes));
    if (maxVotes === 0) return null;

    return languages.filter((l) => l.votes === maxVotes);
  }, [languages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">🗳️ Software Language Election</h1>
          <p className="text-gray-300 mt-2">
            Cast your vote and see which language leads the future 🚀
          </p>
        </div>

        {/* Add Language */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            value={newLang}
            onChange={(e) => setNewLang(e.target.value)}
            placeholder="Enter new language"
            className="flex-1 p-3 rounded-xl bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addLanguage}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-semibold shadow"
          >
            Add
          </button>
        </div>

        {/* Voting Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {languages.map((lang, index) => {
            const percentage = totalVotes
              ? ((lang.votes / totalVotes) * 100).toFixed(1)
              : 0;

            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-5 shadow-lg border border-gray-700 hover:scale-[1.02] transition"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">{lang.name}</h3>
                  <span className="text-sm bg-gray-700 px-2 py-1 rounded">
                    {lang.votes} votes
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-700 h-2 rounded mb-3">
                  <div
                    className="bg-green-500 h-2 rounded"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <p className="text-sm text-gray-400 mb-4">
                  {percentage}% of total votes
                </p>

                <button
                  onClick={() => incrementVote(index)}
                  className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-xl font-medium"
                >
                  Vote
                </button>
              </div>
            );
          })}
        </div>

        {/* Result Section */}
        {winner && (
          <div className="mt-10 bg-yellow-500 text-black p-6 rounded-2xl shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-3">🏆 Election Result</h2>

            {winner.length === 1 ? (
              <p className="text-lg">
                <span className="font-semibold">{winner[0].name}</span> wins with{' '}
                <span className="font-bold">{winner[0].votes}</span> votes 🎉
              </p>
            ) : (
              <p className="text-lg">
                It's a tie between{' '}
                <span className="font-semibold">
                  {winner.map((w) => w.name).join(", ")}
                </span>{' '}
                with {winner[0].votes} votes each 🤝
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Voting;
